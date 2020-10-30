import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: User;
  username: string;
  password: string;
  alertMessage: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  verifyUserCredentials() {
    this.loginService.getUserCredentials(this.username, this.password).subscribe(
      users => {
        this.loginService.storeUserDetails(users);
      },
      error => {
        console.error(error.error)
        this.showNotification(error.error);
      },
      () => {
        this.router.navigate(['/home']);
      }
    )
  }

  showNotification(message: string): void {
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = '';
    }, 2000)
  }
  

}

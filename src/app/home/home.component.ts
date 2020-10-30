import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.loginService.userDetails.subscribe(user => {
      const users = localStorage.getItem('userDetails');
      this.userDetails = JSON.parse(users);
      console.log(this.userDetails);
    });
    if (this.userDetails === null) this.router.navigate(['/login'])
  }

  logout() {   
    this.homeService.getLogoutApi(localStorage.getItem('token')).subscribe(
      res => {
        console.log('logout');
      },
      error => {
        console.log(error);
      },
      () => {
        localStorage.clear();
        this.router.navigate(['/login']); 
      }
    )
  }

}

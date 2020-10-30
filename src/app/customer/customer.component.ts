import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../login/users';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  form: FormGroup;
  name = new FormControl('', [Validators.required, Validators.nullValidator]);
  age = new FormControl('', [Validators.required, Validators.nullValidator]);
  address = new FormControl('', [Validators.required, Validators.nullValidator]);
  title: string = 'Add Customer Information';
  alertMessage: string; 
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token') === null) this.router.navigate(['/login'])
  }

  getErrorMessage() {
    if (this.name.hasError('required') || this.age.hasError('required') || this.address.hasError('required')) {
      return 'You must enter a value';
    }
  }

  saveCustomerDetails() {
    const userDetails: Customer = {
      customerName: this.name.value,
      customerAge: this.age.value,
      customerAddress: this.address.value
    }

    if (userDetails.customerName === '' || userDetails.customerAge === null || userDetails.customerAddress === '') {
      this.showNotification('Please complete filling-up the form');
    } else {
      console.log(userDetails)
      const token = localStorage.getItem('token');
      this.customerService.addCustomer(userDetails, token).subscribe(
        result => {
        console.log(result);
        },
        error => {
          this.showNotification('There has been a technical error, please try again later.');
        },
        () => {
          this.showNotification('New Customer has been added!');
        }
      );
    }

    
  }

  showNotification(message: string): void {
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = '';
    }, 5000)
  }

}

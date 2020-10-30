import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { OrdereseService } from './orderese.service';
import { Orders } from './orders';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userDetails;
  orders: Orders;
  date; 
  title: string = 'View Customer Information';
  displayedColumns: string[] = ['Customer', 'Order Date', 'Order Detail', 'Order Amount'];
  constructor(
    private orderService: OrdereseService,
    private loginService: LoginService,
    private route: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token') === null) this.route.navigate(['/login'])
    this.loginService.userDetails.subscribe(user => {
      const users = localStorage.getItem('userDetails');
      this.userDetails = JSON.parse(users);
    });
    if (this.userDetails) {
      const token = localStorage.getItem('token');
      this.orderService.getOrders(token).subscribe(
        orders => {
          this.orders = orders
        }
      )  
    }
    
  }

}

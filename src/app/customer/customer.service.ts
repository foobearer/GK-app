import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public readonly baseUrl = `https://test.greenkoncepts.com/gktest/`


  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer, key: string): Observable<Customer> {
    console.log(customer, key)
    return this.http.post<Customer>(`${this.baseUrl}createCustomer?token=${key}`, customer)
  }
}

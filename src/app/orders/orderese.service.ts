import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdereseService {

  public readonly baseUrl = `https://test.greenkoncepts.com/gktest/`

  constructor(private http: HttpClient) { }

  getOrders(key:string): Observable<Orders> {
    return this.http.get<Orders>(`${this.baseUrl}getAllOrders?token=${key}`);
  }

}

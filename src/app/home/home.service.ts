import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login/users';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public readonly baseUrl = `https://test.greenkoncepts.com/gktest/`
  constructor(
    private http: HttpClient
  ) { }

  getLogoutApi(token:string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}logout?token=${token}`);
  }
}

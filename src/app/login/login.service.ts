import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ConfigService } from '../config.service';
import { User } from './users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public readonly baseUrl = `https://test.greenkoncepts.com/gktest/`;
  
  userDetails = new BehaviorSubject<any>(localStorage.getItem("userDetails"));

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getUserCredentials(username: string, password: string): Observable<User>{
    return  this.http.get<User>(`${this.baseUrl}/login?username=${username}&password=${password}`);
  }

  storeUserDetails(userDetails) {
    console.log(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("token", userDetails.key);
    this.userDetails.next(userDetails);
  }
  

}

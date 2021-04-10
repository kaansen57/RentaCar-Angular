import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth/auth';
import { Token } from '../models/auth/token';
import { User } from '../models/auth/user';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  baseURL = "https://localhost:44383/api/auth/";

  login(userInfo:Auth){
    let newURL = this.baseURL + "login";
    return this.httpClient.post<SingleResponseModel<Token>>(newURL,userInfo);
  }

  register(user:User){
    let newURL = this.baseURL + "register";
    return this.httpClient.post<SingleResponseModel<Token>>(newURL,user);
  }

}

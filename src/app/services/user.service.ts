import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  baseURL = "https://localhost:44383/api/user/";

  getUserByEmail(userMail:string):Observable<ListResponseModel<User>>{
    let newURL = this.baseURL + "getbyemail?email="+userMail;
    return this.httpClient.get<ListResponseModel<User>>(newURL);
  }
}

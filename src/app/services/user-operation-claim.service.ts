import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { UserOperationClaim } from '../models/userOperationClaim/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(private httpClient: HttpClient) {}
  baseURL = 'https://localhost:44383/api/useroperationclaim/';

  getUserOperationClaim(userId:number):Observable<ListResponseModel<UserOperationClaim>>{
    let newURL = this.baseURL + "getuserclaim?userId="+userId;
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newURL);
  }

}

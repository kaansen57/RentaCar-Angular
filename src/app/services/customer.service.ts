import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {}
  
  baseURL = 'https://localhost:44383/api/customer/';

  getCustomerByUserId(userId:number):Observable<ListResponseModel<Customer>> {
    let newURL = `${this.baseURL}getbyuserid?userId=${userId}`;
    return this.httpClient.get<ListResponseModel<Customer>>(newURL);
  }
   
}

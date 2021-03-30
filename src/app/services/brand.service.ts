import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
 /*Data */
  
  baseURL = "https://localhost:44383/api/brand/";
  /*Methods*/
  getAll(): Observable<ListResponseModel<Brand>>{
    let newURL =  this.baseURL + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newURL);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
 /*Data */
  
  baseURL = "https://localhost:44383/api/brand/";
  /*Methods Get*/
  getAll(): Observable<ListResponseModel<Brand>>{
    let newURL =  this.baseURL + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newURL);
  }


  /*Methods POST*/
  brandAdd(brand:Brand){
    let newURL =  this.baseURL + "add";
    return this.httpClient.post(newURL,brand,{responseType:'text'});
  }

  brandDelete(brand:Brand){
    let newURL =  this.baseURL + "delete";
    return this.httpClient.post(newURL,brand,{responseType:'text'});
  }
  brandUpdate(brand:Brand){
    let newURL =  this.baseURL + "update";
    return this.httpClient.put(newURL,brand,{responseType:'text'});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://localhost:44383/api/color/';

  getAll(): Observable<ListResponseModel<Color>> {
    let newUrl = this.baseURL + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }


  // Method POST
  colorAdd(color: Color) {
    let newUrl = this.baseURL + 'add';
    return this.httpClient.post(newUrl, color,{responseType:'text'});
  }

  colorDelete(color:Color){
    let newURL =  this.baseURL + "delete";
    return this.httpClient.post(newURL,color,{responseType:'text'});
  }
  colorUpdate(color:Color){
    let newURL =  this.baseURL + "update";
    return this.httpClient.put(newURL,color,{responseType:'text'});
  }
}

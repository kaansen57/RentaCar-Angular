import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarPropertyDto } from '../models/carProperty/carPropertyDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarPropertyService {

  constructor(private httpClient : HttpClient) { }
  /*Data*/
  baseURL: string = 'https://localhost:44383/api/carproperty/';

  getPropertyDetailsById(propId:number): Observable<ListResponseModel<CarPropertyDto>>{
    let newURL = this.baseURL + "detailsbyid?propId=" + propId;
    return this.httpClient.get<ListResponseModel<CarPropertyDto>>(newURL);
  }
}

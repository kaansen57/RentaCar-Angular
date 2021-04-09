import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {  
  constructor(private httpClient: HttpClient) {}
        
  baseURL: string = 'https://localhost:44383/api/image/';
                       
  getCarImage(carId: number): Observable<ListResponseModel<Image>> {
    let newURL = this.baseURL + 'getcarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Image>>(newURL);
  }       
     
  getCarImageAll(): Observable<ListResponseModel<Image>> {
    let newURL = this.baseURL + 'getall';
    return this.httpClient.get<ListResponseModel<Image>>(newURL);
  }
}          
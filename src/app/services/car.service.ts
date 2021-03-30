import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDto } from '../models/car/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient,) { }

/*Data*/
  baseURL: string = 'https://localhost:44383/api/cars/';
  baseURL2: string = 'https://localhost:44383/api/image/';

/*Methods */
  getAll(): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "details";
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }

  getDetailsById(carId:number): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "detailsbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getCarBrandFiltered(brandId:number): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "getbrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  
  getCarColorFiltered(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "getcolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getCarImage(carId:number): Observable<any>{
    let newURL = this.baseURL2 + "getcarid?carId=" + carId;
    return this.httpClient.get<any>(newURL);
  }
}

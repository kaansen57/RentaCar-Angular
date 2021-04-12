import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDto } from '../models/car/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) { }

  example : string = "deneme";
/*Data*/
  baseURL: string = 'https://localhost:44383/api/cars/';

/*Methods GET */
  getAll(): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "details";
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getAllList(): Observable<ListResponseModel<Car>>{
    let newURL = this.baseURL + "getall";
    return this.httpClient.get<ListResponseModel<Car>>(newURL);
  }
  getDetailsById(carId:number): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "detailsbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getCarBrandFiltered(brandId:number): Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "detailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getCarColorFiltered(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newURL = this.baseURL + "detailsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  getCarPriceFiltered(min:number,max:number):Observable<ListResponseModel<CarDto>>{
    let newURL = `${this.baseURL}getpricefilter?min=${min}&max=${max}`;
    return this.httpClient.get<ListResponseModel<CarDto>>(newURL);
  }
  
  /*Methods POST */
  carAdd(car:Car){
    let newURL = this.baseURL + "add";
    return this.httpClient.post(newURL,car,{responseType:'text'});
  }
  carDelete(car:Car){
    let newURL = this.baseURL + "delete";
    return this.httpClient.post(newURL,car,{responseType:'text'});
  }
  carUpdate(car:Car){
    let newURL = this.baseURL + "update";
    return this.httpClient.put(newURL,car,{responseType:'text'});
  }
}

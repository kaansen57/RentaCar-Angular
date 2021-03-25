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
  constructor(private httpClient: HttpClient) { }

/*Data*/
  baseURL: string = 'https://localhost:44383/api/cars/';

/*Methods */
  getAll(): Observable<ListResponseModel<CarDto>>{
    return this.httpClient.get<ListResponseModel<CarDto>>(this.baseURL + 'details');
  }
}

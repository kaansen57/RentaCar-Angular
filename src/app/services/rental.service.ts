import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental/rental';
import { RentalDto } from '../models/rental/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  /*Data */
  
  baseURL = "https://localhost:44383/api/rental/";
 
  /*Methods*/
  getRentalDetail():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.baseURL+"details");
  }
  getRental(carId:number):Observable<ListResponseModel<Rental>>{
    let newURL = this.baseURL+"get?id="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newURL);
  }
  getRentalCheck(carId:number,rentDate:Date,returnDate:Date):Observable<ListResponseModel<Rental>>{
    let newURL = `${this.baseURL}rentalcheck?carId=${carId}&rentDate=${rentDate}&returnDate=${returnDate}`;
    return this.httpClient.get<ListResponseModel<Rental>>(newURL);
  }
  rentalAdd(rental:Rental){
    let newURL =`${this.baseURL}addrental`;
    return this.httpClient.post(newURL,rental);
  }
 
}

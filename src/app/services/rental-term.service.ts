import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalTerm } from '../models/rentalTerm/rentalTerm';

@Injectable({
  providedIn: 'root'
})
export class RentalTermService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = 'https://localhost:44383/api/rentalterm/';
                   
  getRentalTerm(carId: number): Observable<ListResponseModel<RentalTerm>> {
    let newURL = this.baseURL + 'getbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<RentalTerm>>(newURL);
  }    
}

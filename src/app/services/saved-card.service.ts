import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard/creditCard';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SavedCardService {

  constructor(private httpClient: HttpClient) {}
  baseURL = 'https://localhost:44383/api/savedcard/';

  creditCardAdd(creditCard: CreditCard) {
    let newURL = `${this.baseURL}add`;
    return this.httpClient.post<CreditCard>(newURL, creditCard);
  }

  creditCardByUser(userId: number): Observable<ListResponseModel<CreditCard>> {
    let newURL = `${this.baseURL}getbyuserid?userId=${userId}`;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newURL);
  }
}

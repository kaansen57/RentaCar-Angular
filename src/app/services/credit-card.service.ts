import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard/creditCard';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://localhost:44383/api/creditcard/';

  creditCardCheck(creditCard: CreditCard) {
    let newURL = `${this.baseURL}cardcheck`;
    return this.httpClient.post<CreditCard>(newURL, creditCard);
  }

  creditCardAdd(creditCard: CreditCard) {
    let newURL = `${this.baseURL}cardadd`;
    return this.httpClient.post<CreditCard>(newURL, creditCard);
  }
  
  creditCardByUser(userId: number): Observable<ListResponseModel<CreditCard>> {
    let newURL = `${this.baseURL}getusercard?userId=${userId}`;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newURL);
  }

  
}

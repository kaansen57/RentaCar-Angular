import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard/creditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private httpClient:HttpClient) { }
  
  baseURL = "https://localhost:44383/api/creditcard/"

  creditCardCheck(creditCard:CreditCard){
      let newURL = `${this.baseURL}cardcheck`;
      return this.httpClient.post<CreditCard>(newURL,creditCard);
  }

}

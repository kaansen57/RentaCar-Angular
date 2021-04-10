import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private httpClient: HttpClient) {}

  isAuthenticated() {
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
  
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key: string, value: any) {
    if (localStorage.getItem(key)) {
      this.deleteToken(key);
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  deleteToken(key: string) {
    localStorage.removeItem(key);
  }
}

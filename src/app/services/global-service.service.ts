import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  constructor(
    private localStorage:LocalStorageService
  ) { }

  private static clearLocalStorage(){
      localStorage.clear();
  }
}

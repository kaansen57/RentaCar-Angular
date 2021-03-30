import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'https://localhost:44383/api/color/';

  getAll():Observable<ListResponseModel<Color>>{
      let newUrl = this.baseURL+ "getall";
      return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://localhost:44383/api/color/';

  getAll(): Observable<ListResponseModel<Color>> {
    let newUrl = this.baseURL + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }

  colorAdd(color: Color): Observable<ResponseModel> {
    let newUrl = this.baseURL + 'add';
    return this.httpClient.post<ResponseModel>(newUrl, color);
  }
}

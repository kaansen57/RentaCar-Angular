import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Injectable,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';

import { CarService } from 'src/app/services/car.service';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDto } from 'src/app/models/car/carDto';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) {}

  /*Data */
  loading = false;
  cars: CarDto[] = [];
  carResponseModel: ListResponseModel<CarDto> = {
    data: this.cars,
    message: '',
    success: true,
  };

  /*Methods */
  getCarsAll(){
    this.carService.getAll().subscribe(response=>{
        this.cars = response.data;
        this.loading = true;
    })
  }
  ngOnInit(): void {
    this.getCarsAll();
  }

  // delete(data: Car): Observable<any> {
  //   const headers = { 'content-type': 'application/json' };
  //   const body = JSON.stringify(data);
  //   return this.httpClient.post(this.baseURL + '/delete', body, {
  //     headers: headers,
  //     observe: 'response',
  //   });
  // }
}

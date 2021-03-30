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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}


  /*Data */
  loading = false;
  cars: CarDto[] = [];
  carResponseModel: ListResponseModel<CarDto> = {
    data: this.cars,
    message: '',
    success: true,
  };

  /*Methods */
  getCarsAll() {
    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
      this.loading = true;
    });
  }

  getCarBrandFiltered(brandId: number) {
    this.carService.getCarBrandFiltered(brandId).subscribe((response) => {
      this.cars = response.data;
      this.loading = true;
    });
  }

  getCarColorFiltered(colorId: number) {
    this.carService.getCarColorFiltered(colorId).subscribe((response) => {
      this.cars = response.data;
      this.loading = true;
    });
  }
  showDetail(car:CarDto){
    console.log(car);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarBrandFiltered(params['brandId']);
      } else if (params['colorId']) {
        this.getCarColorFiltered(params['colorId']);
      } else {
        this.getCarsAll();
      }
    });
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

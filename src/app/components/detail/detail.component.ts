import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/car/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  details:CarDto[];
  images = [{
    id:1,
    imagePath:"",
  }];
  getCarDetail(carId:number){
    this.carService.getDetailsById(carId).subscribe(response=>{
        this.details = response.data;
        console.log(this.details);
    })
  }
  getCarImage(carId:number){
    this.carService.getCarImage(carId).subscribe(response=>{
      console.log(response);
      this.images = response;
  })
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImage(params['carId']);
      }
    })
  }

}

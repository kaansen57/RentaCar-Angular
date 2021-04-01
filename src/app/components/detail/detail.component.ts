import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/car/carDto';
import { Image } from 'src/app/models/image/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private carService: CarService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  details:CarDto[];
  images:Image[];
  getCarDetail(carId:number){
    this.carService.getDetailsById(carId).subscribe(response=>{
        this.details = response.data;
        console.log(this.details);
    })
  }
  getCarImage(carId:number){
    this.imageService.getCarImage(carId).subscribe(response=>{
      console.log(response);
      this.images = response.data;
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

import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';
import { CarDto } from 'src/app/models/car/carDto';
import { Image } from 'src/app/models/image/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private carService:CarService) { }
  startDate: Date;
  endDate: Date;
  rangeDates: Date[];

  cars:CarDto[];
  changeDateEnd(e:Date){
    this.endDate = e;
    console.log(this.startDate);
  }
  changeDateStart(s:Date){
    this.startDate = s;
    console.log(this.startDate);
  }
  change(dates:Date[]){
    console.log(dates[0]);
    console.log(dates[1]);
  }

  getCarAll(){
    this.carService.getAll().subscribe(response=>{
        this.cars = response.data;
    })
  }
  ngOnInit(): void {
  }
}

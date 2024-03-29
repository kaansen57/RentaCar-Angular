import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { CarDto } from 'src/app/models/car/carDto';
import { CarPropertyDto } from 'src/app/models/carProperty/carPropertyDto';
import { Image } from 'src/app/models/image/image';
import { CarPropertyService } from 'src/app/services/car-property.service';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private carService:CarService,private imageService:ImageService,private carPropertyService:CarPropertyService) { }
  startDate: Date;
  endDate: Date;
  rangeDates: Date[];
  images:Image[];
  cars:CarDto[];
  carProperty:CarPropertyDto[];
  events1: any[];

  
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

  imageFilter(carId:number){
    let show = this.images.find(x=>x.carId === carId);
    if (show) {
        return show.imagePath;
    }
    else{
      return "/Uploads/default.png";
    }
  }
  getCarImageAll() {
    this.imageService.getCarImageAll().subscribe((response) => {
      //data district 
      this.images =  response.data.filter((value, index, self) => self.findIndex((m) => m.carId === value.carId ) === index);
    });
  }
  
  getCarAll(){
    this.carService.getAll().subscribe(response=>{
        this.cars = response.data;
        this.cars.map((x) => {
          this.getCarProperty(x.carPropertyId);  
        });
        
    })
  }

  getCarProperty(propId:number){
    this.carPropertyService.getPropertyDetailsById(propId).subscribe((response)=>{
        this.carProperty = response.data
    })
  }
  
  ngOnInit(): void {
    this.getCarAll();
    this.getCarImageAll();
    this.events1 = [
      {status: 'Kayıt Ol',  icon: PrimeIcons.USER, color: '#D23B38'},
      {status: 'Araç Seç',  icon: PrimeIcons.EYE, color: '#D23B38'},
      {status: 'Ödeme Yap',  icon: PrimeIcons.CREDIT_CARD, color: '#dda455'},
      {status: 'Hazır',  icon: PrimeIcons.CHECK, color: '#4CAF50'}
  ];
  }
}

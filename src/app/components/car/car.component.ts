import { Component, OnInit, Injectable } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/car/carDto';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image/image';

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
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  /*Data */
  cars: CarDto[] = [];
  filterText = '';
  filterBrand = '';
  filterColor = '';
  images: Image[] = [];
  minPrice:number = 0;
  maxPrice:number = 1500;
  rangeValues: number[] = [this.minPrice, this.maxPrice];

  /*Methods */
  getCarsAll() {
    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
      console.log(this.cars);
      console.log(this.cars);
     
    });
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

  getCarBrandFiltered(brandId: number) {
    this.carService.getCarBrandFiltered(brandId).subscribe((response) => {
      this.cars = response.data;
    });
    this.carsInImageCheck();
  }

  getCarColorFiltered(colorId: number) {
    this.carService.getCarColorFiltered(colorId).subscribe((response) => {
      this.cars = response.data;
    });
   this.carsInImageCheck();
  }
  carsInImageCheck(){
    this.cars.forEach(x=>{
      this.images.forEach(y=>{
        if (x.carId === y.carId) {
            x.imagePath = y.imagePath
            x.date = y.date
        }
      })
    })
  }
  filterReset(){
    this.rangeValues = [this.minPrice , this.maxPrice];
  }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarBrandFiltered(params['brandId']);
        this.getCarImageAll();
      } else if (params['colorId']) {
        this.getCarColorFiltered(params['colorId']);
        this.getCarImageAll();
      } else {
        this.getCarsAll();
        this.getCarImageAll();
      }
    });
  }
}

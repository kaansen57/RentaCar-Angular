import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/car/carDto';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: CarDto[], ...args:number[]) {
   
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/car/carDto';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: CarDto[], ...args:number[]): CarDto[] {
    return args[0] || args[1]?value
          .filter(
          (car: CarDto) =>
           car.dailyPrice >= args[0] && car.dailyPrice <= args[1]) 
          :value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/car/carDto';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: CarDto[], filterText: string): CarDto[] {
    console.log(value);
    
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText?value
          .filter(
          (car: CarDto) =>
           car.carName.toLocaleLowerCase().indexOf(filterText) !== -1) 
          :value;
  }
}

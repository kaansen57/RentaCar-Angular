import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/car/carDto';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText?value
          .filter(
          (car: CarDto) =>
           car.colorName.toLocaleLowerCase().indexOf(filterText) !== -1) 
          :value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    return (value * args[0]) + value + "₺";
  }

}

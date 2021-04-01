import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor() { }


  rangeValues:number[] = [0,1500];

  priceFilterChange(){

  }
  ngOnInit(): void {
  }

}

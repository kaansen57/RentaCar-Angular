import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/models/image/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  startDate: Date;
  endDate: Date;
  ngOnInit(): void {
  }
}

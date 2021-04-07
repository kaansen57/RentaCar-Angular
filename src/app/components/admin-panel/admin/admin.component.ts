import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private rentalService: RentalService,
  ) {}

  carLength: number;
  brandLength: number;
  colorLength: number;
  rentalLength: number;
  getCarAll() {
    this.carService.getAll().subscribe((response) => {
      this.carLength = response.data.length;
    });
  }

  getBrandAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brandLength = response.data.length;
    });
  }
  getColorAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colorLength = response.data.length;
    });
  }
  getRentalAll() {
    this.rentalService.getRentalDetail().subscribe((response) => {
      this.rentalLength = response.data.length;
    });
  }
  ngOnInit(): void {
    this.getCarAll();
    this.getBrandAll();
    this.getColorAll();
    this.getRentalAll();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  constructor(private brandService: BrandService, private router: Router) {}

  //data
  brands: Brand[] = [];
  @Output() filterBrandChange = new EventEmitter<string>();
  @Input() filterBrand: string;

  change(newValue:string) {
    this.filterBrand = newValue;
    this.filterBrandChange.emit(newValue);
  }
  navigateTo(brandId: any) {
    this.router.navigate([`/cars/filters/brandId/${brandId.value}`]);
  }


  getBrandAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

 
  
  
  ngOnInit(): void {
    this.getBrandAll();
  }
}

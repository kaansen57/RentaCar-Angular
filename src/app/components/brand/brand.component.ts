import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService: BrandService) { }

  //data
  brands:Brand[]=[];
  showBrand = true;
  //Methods

  getBrandAll(){
    this.brandService.getBrands().subscribe(response=>{
        this.brands = response.data;
    })
  }

  show(){
    this.showBrand = !this.showBrand;
  }
  ngOnInit(): void {
    this.getBrandAll();
  }

}

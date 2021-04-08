import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';
import { CarPropertyDto } from 'src/app/models/carProperty/carPropertyDto';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarPropertyService } from 'src/app/services/car-property.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  providers: [MessageService],
})

export class CarAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private propertyService: CarPropertyService,
    private messageService: MessageService
  ) {}

  car :Car;
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  properties: CarPropertyDto[];

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId:[null, Validators.required],
      colorId: [null, Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: [null, [Validators.required,Validators.min(0)]],
      description: [''],
      carName: ['', Validators.required],
      carProperty: [null, Validators.required],
    });
  }

  getPropertyAll(){
    this.propertyService.getPropertyAll().subscribe((response) => {
      this.properties = response.data;
    })
  }
  getBrandAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColorAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }
  carAdd() {
    if (this.carAddForm.valid) {
      let carModel:Car = {...this.carAddForm.value};
      this.carService.carAdd(carModel).subscribe((response)=>{
        this.messageService.add({
          key: 'success',
          severity: 'success',
          detail: 'Araba Başarıyla Eklendi!',
        });
      },errorResponse=>{
        console.log(errorResponse);
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: "",
          });
      });
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }
  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrandAll();
    this.getColorAll();
    this.getPropertyAll();
  }
}

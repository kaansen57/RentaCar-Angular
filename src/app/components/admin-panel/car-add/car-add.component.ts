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
import { CarDto } from 'src/app/models/car/carDto';
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

  car: Car;
  cars: CarDto[];
  carAddForm: FormGroup;
  carUpdateForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  properties: CarPropertyDto[];
  carDialog: boolean;
  carShow: boolean;
  editShow: boolean;

  carAdd() {
    if (this.carAddForm.valid) {
      let carModel: Car = { ...this.carAddForm.value };
      this.carService.carAdd(carModel).subscribe(
        (response) => {
          this.messageService.add({
            key: 'success',
            severity: 'success',
            detail: 'Araba Başarıyla Eklendi!',
          });
          this.pageReload();
        },
        (errorResponse) => {
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: errorResponse.error,
          });
        }
      );
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }

  deleteCar(car: Car) {
    this.carService.carDelete(car).subscribe(
      (response) => {
        this.messageService.add({
          key: 'success',
          severity: 'success',
          detail: response,
        });
        this.pageReload();
      },
      (errorResponse) => {
        this.messageService.add({
          key: 'error',
          severity: 'error',
          detail: errorResponse.error,
        });
      }
    );
  }

  updateCar() {
    let carModel: Car = { ...this.carUpdateForm.value };
    if (this.carUpdateForm.valid) {
      this.carService.carUpdate(carModel).subscribe(
        (response) => {
          this.messageService.add({
            key: 'success',
            severity: 'success',
            detail: response,
          });
          this.pageReload();
        },
        (errorResponse) => {
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: errorResponse.error,
          });
        }
      );
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }
  carDialogShow() {
    this.editShow = false;
    this.carShow = true;
    this.carDialog = true;
  }
  editCar(car: CarDto) {
    this.carDialog = true;
    this.carShow = false;
    this.editShow = true;
    this.carUpdateForm.patchValue({ ...car });
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: [null, Validators.required],
      colorId: [null, Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      carName: ['', Validators.required],
      carProperty: [null, Validators.required],
    });
  }

  createUpdateAddForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: [null, Validators.required],
      brandId: [null, Validators.required],
      colorId: [null, Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      carName: ['', Validators.required],
      carProperty: [null, Validators.required],
    });
  }
  getCarAll() {
    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getPropertyAll() {
    this.propertyService.getPropertyAll().subscribe((response) => {
      this.properties = response.data;
    });
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

  pageReload() {
    setTimeout(() => {
      history.go();
    }, 2000);
  }

  ngOnInit(): void {
    this.createCarAddForm();
    this.createUpdateAddForm();
    this.getBrandAll();
    this.getColorAll();
    this.getPropertyAll();
    this.getCarAll();
  }
}

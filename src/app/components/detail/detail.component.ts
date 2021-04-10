import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'src/app/models/car/carDto';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import * as moment from 'moment';
import { Rental } from 'src/app/models/rental/rental';
import { MessageService, MenuItem } from 'primeng/api';
import { CarPropertyService } from 'src/app/services/car-property.service';
import { CarPropertyDto } from 'src/app/models/carProperty/carPropertyDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css' ],
  providers: [MessageService],
})
export class DetailComponent implements OnInit {
  items: MenuItem[];
  constructor(
    private carService: CarService,
    private localStorage: LocalStorageService,
    private rentalService: RentalService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private carPropetyService: CarPropertyService,
    private router: Router
  ) {  }

  
  details: CarDto[];
  rentalDate: Rental[];
  rangeDates: Date[];
  carId: number;
  rentDailyLength: number = 1;
  minDate: Date;
  rentDate: any;
  returnDate: any;
  carProperty: CarPropertyDto[];
  propId:number;
  userFindexScore: number = 0;
  paymentButtonActive:boolean;

  change(dates: Date[]) {
    const convertedDate = moment(dates[0]);
    const convertedDate2 = moment(dates[1]);
    this.rentDate = moment(dates[0]).format().split('+')[0];
    this.returnDate = moment(dates[1]).format().split('+')[0];
    this.rentDailyLength = Math.abs(convertedDate.diff(convertedDate2, 'days'));
  }

  getCarDetail(carId: number) {
    this.carService.getDetailsById(carId).subscribe((response) => {
      this.details = response.data;
    });
  }

  getRentalDate(carId: number) {
    this.rentalService.getRental(carId).subscribe((response) => {
      this.rentalDate = response.data;
    });
  }

  getPropertyDetailsById(propId: number) {
    this.carPropetyService
      .getPropertyDetailsById(propId)
      .subscribe((response) => {
        this.carProperty = response.data;
      });
  }

  findexScoreCheck(){
    let carFindex = this.details[0].findexScore;
    if(carFindex < this.userFindexScore ){
      return true;
    }
    return false;
  }

  getRentalDateCheck(carId: number, rentDate: Date, returnDate: Date) {
    this.rentalService.getRentalCheck(carId, rentDate, returnDate).subscribe(
      (response) => {
        if (this.findexScoreCheck()) {
          this.router.navigate([`/payment/${this.carId}/${this.propId}/${this.rentDate}/${this.returnDate}`]);
        }
        else{
          this.messageService.add({
            severity: 'error',
            summary: 'Araç Kiralanamadı!',
            detail: `Findeks Puanı Yetersiz`,
          });
        }
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Araç Kiralanamadı!',
          detail: `Araç ${moment(rentDate).format('DD-MM-YYYY')} - ${moment(
            returnDate
          ).format('DD-MM-YYYY')} tarihleri arasında kiralanamaz!`,
        });
      }
    );
  }

  minDateValue() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevDay = day === 0 ? day - 1 : day;
    let prevMonth = month === 0 ? 11 : month;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    this.minDate = new Date();
    this.minDate.setDate(prevDay);
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
  }

  steps() {
    this.items = [
      {
        label: 'Araç Seçimi',
        routerLink: 'car/detail',
      },
      {
        label: 'Sürücü Bilgileri',
        routerLink: `/driver-detail`,
      },
      {
        label: 'Ödeme Bilgileri',
        routerLink: '/payment',
      },
    ];
  }
  

  ngOnInit(): void {
    if(this.localStorage.getItem('token') && this.localStorage.getItem('user')) {
       this.userFindexScore = JSON.parse(this.localStorage.getItem('user')[0].findexScore);
       this.paymentButtonActive = false;
    }else{
      this.paymentButtonActive = true;
    }
    this.minDateValue();
    this.steps();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId'] && params['propId']) {
        this.getCarDetail(params['carId']);
        this.getRentalDate(params['carId']);
        this.getPropertyDetailsById(params['propId']);
        this.carId = params['carId'];
        this.propId = params['propId'];
      }
    });
  }
}

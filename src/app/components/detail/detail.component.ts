import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'src/app/models/car/carDto';
import { Image } from 'src/app/models/image/image';
import { RentalDto } from 'src/app/models/rental/rentalDto';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';
import { RentalService } from 'src/app/services/rental.service';
import * as moment from 'moment';
import { Rental } from 'src/app/models/rental/rental';
import { MessageService, MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MessageService],
})
export class DetailComponent implements OnInit {
   items: MenuItem[];
  subscription: Subscription;
  constructor(
    private carService: CarService,
    private imageService: ImageService,
    private rentalService: RentalService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  details: CarDto[];
  images: Image[];
  rentalDate: Rental[];
  rangeDates: Date[];
  carId: number;
  rentDailyLength: number;
  minDate: Date;
  rentDate: any;
  returnDate: any;
  
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
  getCarImage(carId: number) {
    this.imageService.getCarImage(carId).subscribe((response) => {
      this.images = response.data;
    });
  }

  getRentalDate(carId: number) {
    this.rentalService.getRental(carId).subscribe((response) => {
      this.rentalDate = response.data;
    
    });
  }
  getRentalDateCheck(carId: number, rentDate: Date, returnDate: Date) {
    this.rentalService
      .getRentalCheck(carId, rentDate, returnDate)
      .subscribe((response) => {
        if (response.success) {
          this.router.navigate(['/car/buy/:carId']);
          // this.router.navigate(['/car']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Araç Kiralanamadı!',
            detail: `Araç ${moment(rentDate).format('DD-MM-YYYY')} - ${moment(
              returnDate
            ).format('DD-MM-YYYY')} tarihleri arasında kiralanamaz!`,
          });
        }
      });
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
        routerLink: 'rental',
      },
      {
        label: 'Ödeme Bilgileri',
        routerLink: 'payment',
      }
    ];
  }

  ngOnInit(): void {
    this.minDateValue();
    this.steps();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImage(params['carId']);
        this.getCarDetail(params['carId']);
        this.getRentalDate(params['carId']);
        this.carId = params['carId'];
      }
    });
  }
}

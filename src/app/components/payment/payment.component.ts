import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { Rental } from 'src/app/models/rental/rental';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';
import { SavedCardService } from 'src/app/services/saved-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService],
})
export class PaymentComponent implements OnInit {
  constructor(
    private localStorage:LocalStorageService,
    private creditCardService: CreditCardService,
    private savedCardService: SavedCardService,
    private messageService: MessageService,
    private rentalService: RentalService,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  creditCardInformation: CreditCard;
  id: number;
  cardNumber: string = '#### #### #### ####';
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  customerName: string;
  customerSurname: string;
  cardType: number;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: number[] = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028];

  cardId: number;
  propId: number;
  rentDate: Date;
  returnDate: Date;

  userId: number;
  userCards: CreditCard[];
  customerId: number;

  rental: Rental;

  showDetail:boolean = false;
  
  showCardDetail(){
    this.showDetail = !this.showDetail;
  }
  //card save dialog methods
  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'success',
      detail: 'Kredi Kartınız Kaydedilsin Mi ?',
    });
  }
  onConfirm() {
    this.cardSave(this.creditCardInformation);
    this.messageService.clear('c');
    this.pageReload();
  }
  onReject() {
    this.messageService.clear('c');
    this.pageReload();
  }
  //card save dialog methods
  getCustomer(userId: number) {
    this.customerService.getCustomerByUserId(userId).subscribe((response) => {
      this.customerId = response.data[0].id;
    });
  }

  rentalAdd() {
    this.rental = {
      carId: this.cardId,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };
    console.log(this.rental);
    
    this.rentalService.rentalAdd(this.rental).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          detail: 'Kiralama Yapılıyor... Lütfen Bekleyiniz !',
        });
        this.creditCardCheck(this.creditCardInformation);
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          detail: 'Kiralama Yapılamadı!',
        });
      }
    );
  }
  creditCardCheck(creditCard: CreditCard) {
    this.creditCardService.creditCardCheck(creditCard).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Ödeme Başarılı !',
          detail: 'Ödeme Başarılı Yönlendiriliyorsunuz!',
        });
        this.localStorage.setItem('payment-success',true);
        this.showConfirm();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Geçersiz Kredi Kartı !',
          detail: 'Kredi Kartı Bilgileri Geçersiz',
        });
      }
    );
  }

  getUserCards(userId: number) {
    this.savedCardService.creditCardByUser(userId).subscribe((response) => {
      this.userCards = response.data;
    });
  }

  cardSave(creditCardInformation: CreditCard) {
    console.log(creditCardInformation);
    this.savedCardService.creditCardAdd(creditCardInformation).subscribe(
      (response) => {
        console.log(response);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
  onSubmit(creditCardInformation: CreditCard) {
    this.creditCardInformation = creditCardInformation;
    this.creditCardInformation.userId = this.userId;
    this.rentalAdd();
  }

  pageReload() {
    setTimeout(() => {
      this.router.navigate(['/payment-success']);
    }, 3000);
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))[0].id;
    this.getUserCards(this.userId);
    this.getCustomer(this.userId);
    this.activatedRoute.params.subscribe((param) => {
      if (
        param['carId'] ||
        param['propId'] ||
        param['returnDate'] ||
        param['rentDate']
      ) {
        this.cardId = param['carId'];
        this.propId = param['propId'];
        this.rentDate = param['rentDate'];
        this.returnDate = param['returnDate'];
      }
    });
  }
}

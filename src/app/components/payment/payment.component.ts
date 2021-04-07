import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { Rental } from 'src/app/models/rental/rental';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService],
})
export class PaymentComponent implements OnInit {
  constructor(
    private creditCardService: CreditCardService,
    private messageService: MessageService,
    private rentalService :RentalService,
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

  rentals :Rental = {
    carId:2,
    customerId:6,
    rentDate:new Date("16.04.2021"),
    returnDate:new Date("17.04.2021")
}



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
    //kredi kart kaydetme servisi
    // this.messageService.clear('c');
    this.rentalAdd(this.rentals);
  }
  onReject() {
    this.messageService.clear('c');
  }
  rentalAdd(rental:Rental){
    this.rentalService.rentalAdd(rental).subscribe((response)=>{
      console.log(response);
    });
  }
  creditCardCheck(creditCard: CreditCard) {
    console.log(creditCard);

    this.creditCardService.creditCardCheck(creditCard).subscribe(
      (response) => {
        this.showConfirm();
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Ödeme Başarılı !',
        //   detail: 'Ödeme Başarılı Yönlendiriliyorsunuz!',
        // });
        setTimeout(() => {
          this.router.navigate(['/payment-success']);
        }, 2000);
      },
      (err) => {
        this.showConfirm();
        this.messageService.add({
          severity: 'error',
          summary: 'Geçersiz Kredi Kartı !',
          detail: 'Kredi Kartı Bilgileri Geçersiz',
        });
      }
    );
  }

  onSubmit(creditCardInformation: CreditCard) {
    this.creditCardCheck(creditCardInformation);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['carId']) {
        this.cardId = param['carId'];
      } else if (param['propId']) {
        this.propId = param['propId'];
      }
    });
  }
}

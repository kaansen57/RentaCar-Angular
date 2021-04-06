import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService],
})
export class PaymentComponent implements OnInit {
  constructor(
    private creditCardService: CreditCardService,
    private messageService: MessageService
  ) {}

  creditCardInformation: CreditCard;
  id: number;
  cardNumber: string = "#### #### #### ####";
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  customerName: string;
  customerSurname: string;
  cardType: number;

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}

onConfirm() {
  this.messageService.clear('c');
}
onReject() {
  this.messageService.clear('c');
}
  creditCardCheck(creditCard: CreditCard) {
    this.creditCardService.creditCardCheck(creditCard).subscribe(
      (response) => {
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

  onSubmit(creditCardInformation: CreditCard) {
    this.creditCardCheck(creditCardInformation);
  }
  ngOnInit(): void {}
}

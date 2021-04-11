import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(
    private localStorage : LocalStorageService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    if(!this.localStorage.getItem('payment-success')){
      this.router.navigate(['/'])
    }
    else{
      this.localStorage.deleteToken('payment-success');
    }
  }
}

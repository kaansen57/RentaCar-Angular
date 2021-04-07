import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  
  items:MenuItem[];
  constructor() { }
  
  steps() {
    this.items = [
      {
        label: 'Araç Seçimi',
        routerLink: 'car/detail',
      },
      {
        label: 'Ödeme Bilgileri',
        routerLink: '/payment',
      },
      {
        label: 'Ödeme Onayı',
        routerLink: '/payment-success',
      }
    ];
  }
  ngOnInit(): void {
    this.steps();
  }
}

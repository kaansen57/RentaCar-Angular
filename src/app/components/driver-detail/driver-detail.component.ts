import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  constructor() { }
  items:MenuItem[];
  checked: boolean;
 
  ngOnInit(): void {

  }

}

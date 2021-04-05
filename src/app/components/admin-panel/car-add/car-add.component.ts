import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  carAddForm : FormGroup;

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      
    })
  }

  ngOnInit(): void {
  }


}

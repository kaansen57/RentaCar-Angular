import { Component, OnInit } from '@angular/core';
import {  FormBuilder,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
  providers: [MessageService],
})
export class BrandAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private messageService: MessageService,private brandService:BrandService) { }

  brand :Brand;
  brandAddForm: FormGroup;

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName:["", Validators.required],
    });
  }

  brandAdd() {
    if (this.brandAddForm.valid) {
      let brandModel:Brand = {...this.brandAddForm.value};
      this.brandService.brandAdd(brandModel).subscribe((response)=>{
        this.messageService.add({
          key: 'success',
          severity: 'success',
          detail: 'Marka Başarıyla Eklendi!',
        });
      },errorResponse=>{
        console.log(errorResponse);
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: "",
          });
      });
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }
  ngOnInit(): void {
    this.createBrandAddForm();
  }

}

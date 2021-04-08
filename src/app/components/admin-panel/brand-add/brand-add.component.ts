import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private brandService: BrandService
  ) {}

  brand: Brand;
  brands: Brand[];
  brandAddForm: FormGroup;
  brandUpdateForm: FormGroup;
  brandShow: boolean;
  editShow: boolean;
  brandDialog: boolean;

  brandAdd() {
    if (this.brandAddForm.valid) {
      let brandModel: Brand = { ...this.brandAddForm.value };
      this.brandService.brandAdd(brandModel).subscribe(
        (response) => {
          this.messageService.add({
            key: 'success',
            severity: 'success',
            detail: response,
          });
          this.pageReload();
        },
        (errorResponse) => {
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: errorResponse.error,
          });
        }
      );
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel: Brand = { ...this.brandUpdateForm.value };
      this.brandService.brandUpdate(brandModel).subscribe(
        (response) => {
          this.messageService.add({
            key: 'success',
            severity: 'success',
            detail: response,
          });
          this.pageReload();
        },
        (errorResponse) => {
          this.messageService.add({
            key: 'error',
            severity: 'error',
            detail: errorResponse.error,
          });
        }
      );
    } else {
      this.messageService.add({
        key: 'error',
        severity: 'error',
        detail: 'Tüm Alanları Doldurunuz!',
      });
    }
  }

  deleteBrand(brand: Brand) {
    this.brandService.brandDelete(brand).subscribe(
      (response) => {
        this.messageService.add({
          key: 'success',
          severity: 'success',
          detail: response,
        });
        this.pageReload();
      },
      (errorResponse) => {
        this.messageService.add({
          key: 'error',
          severity: 'error',
          detail: errorResponse.error,
        });
      }
    );
  }

  brandGetAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId : [null, Validators.required],
      brandName: ['', Validators.required],
    });
  }

  brandDialogShow() {
    this.brandDialog = true;
    this.brandShow = true;
    this.editShow = false;
  }

  editBrand(brand: Brand) {
    this.brandUpdateForm.patchValue({ ...brand });
    this.brandDialog = true;
    this.brandShow = false;
    this.editShow = true;
  }

  pageReload() {
    setTimeout(() => {
      history.go();
    }, 2000);
  }

  ngOnInit(): void {
    this.createBrandAddForm();
    this.createBrandUpdateForm();
    this.brandGetAll();
  }
}

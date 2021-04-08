import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormControl,
  Validators,} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
  providers: [MessageService],
})
export class ColorAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private messageService: MessageService
  ) { }
  colorAddForm:FormGroup;
  colorUpdateForm: FormGroup;
  color: Color;
  colors: Color[];
  colorShow: boolean;
  editShow: boolean;
  colorDialog: boolean;

  colorAdd() {
    if (this.colorAddForm.valid) {
      let colorModel: Color = { ...this.colorAddForm.value };
      this.colorService.colorAdd(colorModel).subscribe(
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

  updateColor() {
    if (this.colorUpdateForm.valid) {
      let colorModel: Color = { ...this.colorUpdateForm.value };
      this.colorService.colorUpdate(colorModel).subscribe(
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

  deleteColor(color: Color) {
    this.colorService.colorDelete(color).subscribe(
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

colorGetAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName:["", Validators.required],
     });
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId : [null, Validators.required],
      colorName: ['', Validators.required],
    });
  }

  colorDialogShow() {
    this.colorDialog = true;
    this.colorShow = true;
    this.editShow = false;
  }

  editColor(color: Color) {
    this.colorUpdateForm.patchValue({ ...color });
    this.colorDialog = true;
    this.colorShow = false;
    this.editShow = true;
  }

  pageReload() {
    setTimeout(() => {
      history.go();
    }, 2000);
  }

  ngOnInit(): void {
    this.createColorAddForm();
    this.createColorUpdateForm();
    this.colorGetAll();
  }
}

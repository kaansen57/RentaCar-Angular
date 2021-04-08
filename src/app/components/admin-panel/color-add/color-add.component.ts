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
  color: Color;

  createCarAddForm() {
    this.colorAddForm = this.formBuilder.group({
     colorName:["", Validators.required],
    });
  }  
  colorAdd(){
    if (this.colorAddForm.valid) {
      let colorModel:Color = {...this.colorAddForm.value};
      this.colorService.colorAdd(colorModel).subscribe((response)=>{
        this.messageService.add({
          key: 'success',
          severity: 'success',
          detail: 'Renk Başarıyla Eklendi!',
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
    this.createCarAddForm();
  }

}

import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  constructor(private colorService: ColorService,private router: Router) {}

  colors: Color[];
  @Output() filterColorChange = new EventEmitter<string>();
  @Input() filterColor: string;

  change(newValue:string) {
    this.filterColor = newValue;
    this.filterColorChange.emit(newValue);
  }
  
  navigateTo(colorId:any){
    this.router.navigate([`/cars/filters/colorId/${colorId.value}`]);
  }
 
  getAllColor() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }
  ngOnInit(): void {
    this.getAllColor();
  }
}

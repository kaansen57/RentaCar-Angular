import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  constructor(private colorService: ColorService) {}

  colors: Color[];
  currentColor: Color;
  showColor: boolean = true;

  show() {
    this.showColor = !this.showColor;
  }
  setColor(color: Color) {
    this.currentColor = color;
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

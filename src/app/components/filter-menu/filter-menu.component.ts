import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  constructor() { }

  @Output() filterTextChange = new EventEmitter<string>();
  @Input() filterText: string;
  change(newValue:string) {
    this.filterText = newValue;
    this.filterTextChange.emit(newValue);
  }

  ngOnInit(): void {
  }

}

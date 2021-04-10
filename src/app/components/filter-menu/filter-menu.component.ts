import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  userFindexScore:number;

  @Output() filterTextChange = new EventEmitter<string>();
  @Input() filterText: string;
  change(newValue:string) {
    this.filterText = newValue;
    this.filterTextChange.emit(newValue);
  }

  ngOnInit(): void {
    this.userFindexScore = this.localStorageService.getItem('user')[0].findexScore;
  }

}

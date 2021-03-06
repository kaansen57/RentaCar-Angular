import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rental/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private rentalService:RentalService) { }
  rentals:RentalDto[] = [];

  getRentalDetail(){
    this.rentalService.getRentalDetail().subscribe((response)=>{
      this.rentals = response.data;
    })
  }
  ngOnInit(): void {
   this.getRentalDetail();
  }

}

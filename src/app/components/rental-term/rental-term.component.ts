import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalTerm } from 'src/app/models/rentalTerm/rentalTerm';
import { RentalTermService } from 'src/app/services/rental-term.service';

@Component({
  selector: 'app-rental-term',
  templateUrl: './rental-term.component.html',
  styleUrls: ['./rental-term.component.css']
})
export class RentalTermComponent implements OnInit {

  constructor(private rentelTermService:RentalTermService , private activatedRoute:ActivatedRoute) { }

  rentalTerms : RentalTerm[];

  getRentalTerm(carId:number){
    this.rentelTermService.getRentalTerm(carId).subscribe(response=>{
      this.rentalTerms = response.data;
      console.log(this.rentalTerms);
      
    })
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
        if (params['carId']) {
            this.getRentalTerm(params['carId']);
        }
    })

  }

}

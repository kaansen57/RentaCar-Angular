import { Component, OnInit , OnChanges , OnDestroy ,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CarComponent implements OnInit  {
  constructor(private httpClient : HttpClient) { }
  baseURL:string = 'https://localhost:44383/api/cars/getall';

cars:any = [];
getAll() : Observable<any>{
  return this.httpClient.get(this.baseURL);
}
  ngOnInit(): void {
   this.getAll().subscribe((data)=>{
     console.log(data);
     this.cars = data.data;
   })
  }

}

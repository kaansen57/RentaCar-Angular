import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Injectable,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CarComponent implements OnInit,OnChanges {
  constructor(private httpClient: HttpClient) {}
  baseURL: string = 'https://localhost:44383/api/cars';

  cars:Car[] = [];
  getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + "/getall");
  }
  ngOnInit(): void {
    this.getAll().subscribe((data) => {
      console.log(data);
      this.cars = data.data;
    });
  }
  ngOnChanges():void{
  
  }

  delete(data:Car): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    return this.httpClient.post(this.baseURL + '/delete', body,{'headers':headers , observe: 'response'})
   
  }
}

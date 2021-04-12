import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title:string = 'Rent A Car';

 

addItem(e:any){
    console.log(e);
}
condition = false;
open() {
  this.condition = !this.condition;
}
ngOnInit(): void {

}



}

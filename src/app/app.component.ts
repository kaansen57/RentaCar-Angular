import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title:string = 'Rent A Car';

  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

condition = false;
open() {
  this.condition = !this.condition;
}
ngOnInit(): void {

}

// ngOnChanges():void{
//   console.log("updated");
// }

// ngOnDestroy(){
//   console.log("destroy");
  
// }

}

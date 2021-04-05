import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { DetailComponent } from './components/detail/detail.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cars",component:CarComponent},
  {path:"car/detail",component:DetailComponent},
  {path:"car/detail/:carId/:propId",component:DetailComponent},
  {path:"rental" , component:RentalComponent},
  {path:"cars/filters/brandId/:brandId" , component:CarComponent},
  {path:"cars/filters/colorId/:colorId" , component:CarComponent},
  {path:"driver-detail" , component:DriverDetailComponent},
  {path:"driver-detail/:carId" , component:DriverDetailComponent},
  {path:"payment" , component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin-panel/admin/admin.component';
import { BrandAddComponent } from './components/admin-panel/brand-add/brand-add.component';
import { CarAddComponent } from './components/admin-panel/car-add/car-add.component';
import { ColorAddComponent } from './components/admin-panel/color-add/color-add.component';
import { CarComponent } from './components/car/car.component';
import { DetailComponent } from './components/detail/detail.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
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
  {path:"payment/:carId/:propId/:rentDate/:returnDate" , component:PaymentComponent},
  {path:"payment-success" , component:PaymentSuccessComponent},

  //admin panel 
  {path:"admin" , component:AdminComponent},
  {path:"admin/car-add" , component:CarAddComponent},
  {path:"admin/brand-add" , component:BrandAddComponent},
  {path:"admin/color-add" , component:ColorAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

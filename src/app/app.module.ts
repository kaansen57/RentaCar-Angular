import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//primeng modül
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {DataViewModule} from 'primeng/dataview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { HomeComponent } from './components/home/home.component';
import { StatusComponent } from './components/status/status.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    HomeComponent,
    StatusComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

//primeng modül
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {DataViewModule} from 'primeng/dataview';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import {SliderModule} from 'primeng/slider';
import {GalleriaModule} from 'primeng/galleria';
import {ToastModule} from 'primeng/toast';
import {StepsModule} from 'primeng/steps';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CarouselModule} from 'primeng/carousel';


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
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { PriceComponent } from './components/price/price.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { StepsComponent } from './components/shared/steps/steps.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RentalTermComponent } from './components/rental-term/rental-term.component';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarAddComponent } from './components/admin-panel/car-add/car-add.component';
import { ColorAddComponent } from './components/admin-panel/color-add/color-add.component';
import { BrandAddComponent } from './components/admin-panel/brand-add/brand-add.component';


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
    VatAddedPipe,
    FilterPipePipe,
    PriceComponent,
    BrandFilterPipe,
    PriceFilterPipe,
    FilterMenuComponent,
    PaymentComponent,
    DriverDetailComponent,
    StepsComponent,
    GalleryComponent,
    RentalTermComponent,
    ColorFilterPipe,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
   
    
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
    DataViewModule,
    FormsModule,
    AccordionModule,
    FieldsetModule,
    SliderModule,
    GalleriaModule ,
    ToastModule,
    StepsModule,
    InputSwitchModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

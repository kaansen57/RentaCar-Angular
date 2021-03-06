import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {TimelineModule} from 'primeng/timeline';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/shared/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { HomeComponent } from './components/home/home.component';
import { StatusComponent } from './components/shared/status/status.component';
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
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminComponent } from './components/admin-panel/admin/admin.component';
import { AdminSidebarComponent } from './components/admin-panel/shared/admin-sidebar/admin-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/admin-panel/user-edit/user-edit.component';
import { ScrollAnimationDirective } from './directive/scroll-animation.directive';


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
    CreditCardPipe,
    PaymentSuccessComponent,
    FooterComponent,
    AdminComponent,
    AdminSidebarComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    ScrollAnimationDirective,
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
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    RatingModule,
    TimelineModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

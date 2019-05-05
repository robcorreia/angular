import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';
import { FranqersModule } from './franqers/franqers.module';
import { ProductsModule } from './products/products.module';
import { ApiService } from './app.service';

import { HomeComponent } from './home/home.component';
import { PreSignupComponent } from './home/pre-signup/pre-signup.component';
import { ServicesInfoComponent } from './home/services-info/services-info.component';
import { FindFranqerComponent } from './home/find-franqer/find-franqer.component';
import { BecomeFranqerComponent } from './home/become-franqer/become-franqer.component';
import { FaqComponent } from './home/faq/faq.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreSignupComponent,
    ServicesInfoComponent,
    FindFranqerComponent,
    BecomeFranqerComponent,
    FaqComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    CoreModule,
    FranqersModule,
    ProductsModule,

    AppRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

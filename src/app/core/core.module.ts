import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OpenbankComponent } from './shared/openbank/openbank.component';
import { ReviewsCarouselComponent } from './shared/reviews-carousel/reviews-carousel.component';
import { FranqAboutComponent } from './shared/franq-about/franq-about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OpenbankComponent,
    ReviewsCarouselComponent,
    FranqAboutComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OpenbankComponent,
    ReviewsCarouselComponent,
    FranqAboutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    SlickCarouselModule,
  ]
})
export class CoreModule { }

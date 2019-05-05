import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ShareButtonsModule } from '@ngx-share/buttons';
import { FranqerService } from './shared/franqer.service';

import { FranqerDetailComponent } from './franqer-detail/franqer-detail.component';
import { FranqersRoutingModule } from './franqers-routing.module';
import { FranqerAboutComponent } from './franqer-about/franqer-about.component';
import { FranqerProductsComponent } from './franqer-products/franqer-products.component';
import { ProductFormDialogComponent } from './product-form-dialog/product-form-dialog.component';
import { FranqerHomeComponent } from './franqer-home/franqer-home.component';

import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    FranqerDetailComponent,
    FranqerAboutComponent,
    FranqerProductsComponent,
    ProductFormDialogComponent,
    FranqerHomeComponent
  ],
  imports: [
    CommonModule,
    FranqersRoutingModule,
    FlexLayoutModule,

    CoreModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,

    ReactiveFormsModule,
    FormsModule,
    ShareButtonsModule,
  ],
  exports: [
    FranqerDetailComponent,
    FranqerAboutComponent,
    FranqerProductsComponent,
  ],
  providers: [
    FranqerService
  ],
  entryComponents: [ProductFormDialogComponent]
})
export class FranqersModule { }

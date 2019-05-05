import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from '../product-form-dialog/product-form-dialog.component';
import { ProductService } from '../../products/shared/product.service';
import { Franqer } from '../shared/franqer.model'

@Component({
  selector: 'app-franqer-products',
  templateUrl: './franqer-products.component.html',
  styleUrls: ['./franqer-products.component.scss'],
})
export class FranqerProductsComponent implements OnInit {

  products;

  @Input()
  franqer: Franqer;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
  ) { }

  getFirstName(fullName) {
    return fullName && fullName.split(' ')[0];
  }

  openDialog(product): void {
    const dialogRef = this.dialog.open(
      ProductFormDialogComponent,
      {
        width: '250px',
        data: product,
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.franqer && changes.franqer.currentValue) {
      let newFranqer = changes.franqer.currentValue;

      this.productService.getProducts(newFranqer.id)
      .subscribe(products => {
        this.products = products;
      });
    }
  }

  ngOnInit() {}

}

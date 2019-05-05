import { Injectable } from '@angular/core';
import { ApiService } from '../../app.service';

import { Product } from './product.model';

import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  product: Product;

  constructor(private api: ApiService) { }

  getProducts(franqerId): Observable<Product[]> {
    return this.api.get(`franqers/${franqerId}/products/`);
  }
}

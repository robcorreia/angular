import { Injectable } from '@angular/core';
import { ApiService } from '../../app.service';
import { Franqer } from './franqer.model';
import { Observable } from 'rxjs';

@Injectable()
export class FranqerService {

  franqer: Franqer;

  constructor(private api: ApiService) { }

  getFranqer(nickname): Observable<Franqer> {
    return this.api.get(`franqers/${nickname}/`);
  }
}

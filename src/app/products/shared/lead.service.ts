import { Injectable } from '@angular/core';
import { ApiService } from '../../app.service';

import { Lead } from './lead.model';

import { Observable } from 'rxjs';

@Injectable()
export class LeadService {

  constructor(private api: ApiService) { }

  createLead(lead: Lead): Observable<Lead> {
    return this.api.post('leads/', lead);
  }
}

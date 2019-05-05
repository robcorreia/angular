import { Injectable, Inject } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  private baseUri;

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.baseUri = environment.API_URL;
  }

  get (endpoint, paramsList?): Observable<any> {
    const url = this.baseUri + endpoint;
    const params = this.buildParams(paramsList);
    return this.http.get(url, { params });
  }

  post (endpoint, body?, paramsList?): Observable<any> {
    const url = this.baseUri + endpoint;
    const params = this.buildParams(paramsList);
    return this.http.post(url, body, { params });
  }

  put (endpoint, body?, paramsList?): Observable<any> {
    const url = this.baseUri + endpoint;
    const params = this.buildParams(paramsList);
    return this.http.put(url, body);
  }

  delete (endpoint): Observable<any> {
    const url = this.baseUri + endpoint;
    return this.http.delete(url);
  }

  private buildParams (paramsList = {}): HttpParams {
    let params = new HttpParams();

    Object.keys(paramsList).forEach(paramKey => {
      params = params.append(paramKey, paramsList[paramKey]);
    });

    return params;
  }
}

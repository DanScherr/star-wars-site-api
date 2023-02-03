import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly PATH: string = 'planets/1/';

  constructor(private http: HttpClient) {}

  get_api(path: string): Observable<any> {
    return this.http.get(env.baseUrl + path)
  }
}

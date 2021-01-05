import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../_models/ApiResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private exchangeRateUrl = 'https://api.exchangerate-api.com/v4/latest';

  constructor(private http: HttpClient) { }

  getRates(currency): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.exchangeRateUrl}/${currency}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from '../models/ExchangeRate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private exchangeRateUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) { }

  getCurrencies(currency: string): Observable<ExchangeRate> {
    return this.http.get<ExchangeRate>(this.exchangeRateUrl + currency.toLowerCase());
  }
}

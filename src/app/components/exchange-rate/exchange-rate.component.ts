import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';
import { Rate } from '../../models/Rate';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  rates: Rate[];
  currency = 'MXN';
  selectedCurrency = this.currency;

  constructor(private exchangeRatingService: ExchangeRateService) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.exchangeRatingService.getCurrencies(this.selectedCurrency)
      .subscribe(
        (exchangeRate) => {
          this.currency = exchangeRate.base;
          const rates = Object.keys(exchangeRate.rates);
          this.rates = rates.map(rate => ({
            rate,
            value: exchangeRate.rates[rate]
          }));
        },
        (() => {
          this.rates = [];
          alert(`El valor para rate "${this.selectedCurrency}" no es válido`);
        })
        );
  }
}

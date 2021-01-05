import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  rates: object[];
  currency = 'MXN';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.apiService.getRates(this.currency)
      .subscribe(
        (response) => {
          const rates = [];

          // tslint:disable-next-line:forin
          for (const rate in response.rates) {
            rates.push({
              currency: rate,
              value: response.rates[rate]
            });
          }

          this.rates = rates;
        },
        () => {
          this.rates = [];
        }
        );
  }

}

export interface ExchangeRate {
  base: string;
  date: string;
  time_last_updated: number;
  rates: {
    value: number
  };
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<p>{{getRoundedAmount()}}</p>',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input()
  currencyAmount: number = 3.5000053;
  currencyCode: string = 'USD';

  constructor() {}

  getRoundedAmount() {
    return this.getCurrencySymbol() + this.currencyAmount.toFixed(2);
  }

  getCurrencySymbol(): string {
    switch (this.currencyCode) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'GBP':
        return '£';
      case 'INR':
        return 'r';
      default:
        return '';
    }
  }
}

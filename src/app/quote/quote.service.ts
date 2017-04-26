import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { ValuableItem } from './valuable-item';
import { Habitation } from './habitation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

const HEADERS = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers: HEADERS });


@Injectable()
export class QuoteService {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  valuableItem = new ValuableItem();
  habitation: Habitation;
  valuableItems: Array<ValuableItem> = [];
  amount = 0;
  fillBegin: Date;
  fillEnd: Date;
  fillDuration: number;

  constructor(private http: Http) {
    this.fillBegin = new Date();
  }

  calculAmount() {
    this.amount = 0;
    if (this.habitation) {
      this.habitation.calculAmount();
      this.amount = this.habitation.premium;
    }
    if (this.valuableItem && this.valuableItem.purchaseAmount) {
      this.valuableItem.calculAmount();
      this.amount += this.valuableItem.premium;
    }
    for (const vi of this.valuableItems) {
      this.amount += vi.premium;
    }
  }

  addValuableItem() {
    if (this.valuableItems.indexOf(this.valuableItem) === -1) {
      this.valuableItems.push(this.valuableItem);
    }
    this.valuableItem = new ValuableItem();
  }

  sendQuote() {
    this.fillEnd = new Date();
    this.fillDuration = (this.fillEnd.getTime() - this.fillBegin.getTime()) / 1000;

    this.http.post('/api/quote', JSON.stringify(this), OPTIONS)
      .map((res: Response) => {
        console.log(res);
        return res.json();
      })
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
      }).subscribe((json) => {
        console.log(json);
      });
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      fillBegin: this.fillBegin,
      fillEnd: this.fillEnd,
      fillDuration: this.fillDuration,
      email: this.email,
      habitation: JSON.stringify(this.habitation),
      valuableItems: JSON.stringify(this.valuableItems),
      amount: this.amount
    };
  }

}

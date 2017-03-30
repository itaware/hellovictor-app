import { Injectable } from '@angular/core';
import * as moment from 'moment';

class ValuableItem {
  premiumRatio = 0.032;
  purchaseAmount = null;
  purchaseDate = null;
  insuranceOptions = {
    theft: { state: false, cost: .42},
    breakdown: { state: false, cost: 2.9 },
    failure: { state: false, cost: 3.9 }
  }
  premium: number = 0;
  value: number = 0;
  depreciation: number = 1;
  deductible: number = 0;

  constructor() { }

  theftCost() {
    if (this.value > 4000) {
      this.insuranceOptions.theft.cost = 3.33;
    } else if (this.value > 3000) {
      this.insuranceOptions.theft.cost = 2.92;
    } else if (this.value > 2000) {
      this.insuranceOptions.theft.cost = 2.92;
    } else if (this.value > 1500) {
      this.insuranceOptions.theft.cost = 2.5;
    } else if (this.value > 1000) {
      this.insuranceOptions.theft.cost = 1.67;
    } else if (this.value > 750) {
      this.insuranceOptions.theft.cost = 1.25;
    } else if (this.value > 500) {
      this.insuranceOptions.theft.cost = .83;
    } else if (this.value > 250) {
      this.insuranceOptions.theft.cost = .42
    } else {
      this.insuranceOptions.theft.cost = .42;
    }
  }

  calculAmount() {
    this.calculDepreciation();
    this.value = this.purchaseAmount * this.depreciation;
    if (this.value > 4000) {
      this.premium = 14.16;
    } else if (this.value > 3000) {
      this.premium = 12.5;
    } else if (this.value > 2000) {
      this.premium = 10;
    } else if (this.value > 1500) {
      this.premium = 8.33;
    } else if (this.value > 1000) {
      this.premium = 7.91;
    } else if (this.value > 750) {
      this.premium = 6.66;
    } else if (this.value > 500) {
      this.premium = 5.41;
    } else if (this.value > 250) {
      this.premium = 4.16;
    } else {
      this.premium = 3.33;
    }
    this.theftCost();
    if (this.insuranceOptions.theft.state) {
      this.premium += this.insuranceOptions.theft.cost;
    }
  }

  calculDepreciation() {
    let d = moment().diff(moment(this.purchaseDate, 'DDMMYYYY'), 'months');
    this.depreciation = 1;
    if (d > 24) {
      this.depreciation = .4;
    } else if (d > 12) {
      this.depreciation = .6;
    } else if (d > 6) {
      this.depreciation = .8;
    }
  }
}


@Injectable()
export class QuoteService {
  habitationType: string;
  roomsNumber: number = 0;
  habitationValue: number = 0;
  address: string;
  city: string;
  zipCode: string;
  square: string;
  insuranceOptions: any = {
    replacementNew: { state: true, cost: 1.3 },
    dependency: { state: false, cost: 0.8 },
    occupancy: { state: false, cost: 1.2 },
    hotspot: { state: false, cost: 1.6 },
    alarm: { state: true, cost: 2.3 },
    deductible: { state: false, cost: 2 }
  };
  habitationPremium: number = 0;
  valuableItem = new ValuableItem();
  valuableItems = [];
  amount: number = 0;
  contact: any = {};

  constructor() { }

  calculAmount() {
    this.amount = 0;
    if (this.habitationType) {
      this.habitationPremium = 0;
      if (this.roomsNumber < 3 && this.habitationValue <= 10000) {
        this.habitationPremium += 10.3;
      } else if (this.roomsNumber >= 3 && this.habitationValue <= 10000) {
        this.habitationPremium += 10.8;
      } else if (this.roomsNumber < 3 && this.habitationValue > 10000) {
        this.habitationPremium += 11.3;
      } else if (this.roomsNumber >= 3 && this.habitationValue > 10000) {
        this.habitationPremium += 11.8;
      } else if (this.roomsNumber < 3 && this.habitationValue > 30000) {
        this.habitationPremium += 12.3;
      } else if (this.roomsNumber >= 3 && this.habitationValue > 30000) {
        this.habitationPremium += 12.8;
      }
      if (this.insuranceOptions.replacementNew.state) {
        this.habitationPremium += this.insuranceOptions.replacementNew.cost;
      }
      if (this.insuranceOptions.dependency.state) {
        this.habitationPremium += this.insuranceOptions.dependency.cost;
      }
      if (this.insuranceOptions.occupancy.state) {
        this.habitationPremium += this.insuranceOptions.occupancy.cost;
      }
      if (this.insuranceOptions.hotspot.state) {
        this.habitationPremium += this.insuranceOptions.hotspot.cost;
      }
      if (this.insuranceOptions.alarm.state) {
        this.habitationPremium += this.insuranceOptions.alarm.cost;
      }
      if (this.insuranceOptions.deductible.state) {
        this.habitationPremium += this.insuranceOptions.deductible.cost;
      }
      this.amount = this.habitationPremium;
    }
    if (this.valuableItem.purchaseAmount) {
      this.valuableItem.calculAmount();
      this.amount += this.valuableItem.premium;
    }
    for (let vi of this.valuableItems) {
      this.amount += vi.premium;
    }
  }

  addValuableItem() {
    if (this.valuableItems.indexOf(this.valuableItem) === -1) {
      this.valuableItems.push(this.valuableItem);
    }
    this.valuableItem = new ValuableItem();
  }

}

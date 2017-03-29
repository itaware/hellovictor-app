import { Injectable } from '@angular/core';

class ValuableItem {
  premiumRatio = 0.032;
  purchaseAmount = null;
  purchaseDate = null;
  insuranceOptions = {
    theft: { state: false, cost: 8.9 },
    breakdown: { state: true, cost: 2.9 },
    failure: { state: false, cost: 3.9 }
  }
  premium: number = 0;
  value: number = 0;
  depreciation: number = 0;
  deductible: number = 0;

  constructor() { }

  calculAmount() {
    this.calculDepreciation();
    this.value = this.purchaseAmount - this.depreciation;
    this.premium = this.value * this.premiumRatio;
  }
  calculDepreciation() {
    this.depreciation = 0;
  }
}


@Injectable()
export class QuoteService {
  habitationType: string;
  roomsNumber: number = 0;
  habitationValue: number = 0;
  insuranceOptions: any = {
    replacementNew: { state: false, cost: 6.3 },
    normalDependency: { state: true, cost: 4.2 },
    lessOccupancy90Days: { state: true, cost: 5 },
    noHotSpot: { state: true, cost: 5.3 },
    deductible: { state: true, cost: 4 }
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
        this.habitationPremium += 3.9;
      } else if (this.roomsNumber >= 3 && this.habitationValue <= 10000) {
        this.habitationPremium += 4.9;
      } else if (this.roomsNumber < 3 && this.habitationValue > 10000) {
        this.habitationPremium += 5.9;
      } else if (this.roomsNumber >= 3 && this.habitationValue > 10000) {
        this.habitationPremium += 8.9;
      } else if (this.roomsNumber < 3 && this.habitationValue > 30000) {
        this.habitationPremium += 6.9;
      } else if (this.roomsNumber >= 3 && this.habitationValue > 30000) {
        this.habitationPremium += 10.9;
      }
      if (this.insuranceOptions.replacementNew.state) {
        this.habitationPremium += this.insuranceOptions.replacementNew.cost;
      }
      if (!this.insuranceOptions.normalDependency.state) {
        this.habitationPremium += this.insuranceOptions.normalDependency.cost;
      }
      if (!this.insuranceOptions.lessOccupancy90Days.state) {
        this.habitationPremium += this.insuranceOptions.lessOccupancy90Days.cost;
      }
      if (!this.insuranceOptions.noHotSpot.state) {
        this.habitationPremium += this.insuranceOptions.noHotSpot.cost;
      }
      if (!this.insuranceOptions.deductible.state) {
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

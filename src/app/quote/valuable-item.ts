import * as moment from 'moment';

  enum TYPE {
    DIGITAL,
    LEISURE,
    PRECIOUS
  }

export class ValuableItem {
  name: string;
  type: number;
  purchaseAmount: number;
  purchaseDate: string;
  insuranceOptions = {
    theft: { state: false, cost: .42},
    breakdown: { state: false, cost: 2.9 },
    failure: { state: false, cost: 3.9 }
  };
  premium = 0;
  value = 0;
  depreciation = 1;
  deductible = 0;

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
      this.insuranceOptions.theft.cost = .42;
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

  typeDescription() {
    switch (this.type) {
      case TYPE.DIGITAL: return 'appareil numérique';
      case TYPE.LEISURE: return 'matériel de loisir';
      case TYPE.PRECIOUS: return 'objet précieux';
    }
  }
}


export class Habitation {
    type: string;
    rooms: number = 0;
    value: number = 0;
    address: string;
    city: string;
    zipCode: string;
    square: string;
    floor: string;
    insuranceOptions: any = {
        replacementNew: { state: true, cost: 1.3 },
        dependency: { state: false, cost: 0.8 },
        occupancy: { state: false, cost: 1.2 },
        hotspot: { state: false, cost: 1.6 },
        alarm: { state: true, cost: 2.3 },
        deductible: { state: false, cost: 2 }
    };
    premium: number = 0;

    constructor(type: string) {
        this.type = 'renter';
        if (type === 'studio') {
            this.rooms = 1;
            this.value = 10000;
        } else if (type === 'flat') {
            this.rooms = 3;
            this.value = 30000;
        } else if (type === 'house') {
            this.rooms = 5;
            this.value = 50000;
        }
    }

    calculAmount() {
        this.premium = 0;
        if (this.rooms < 3 && this.value <= 10000) {
            this.premium += 10.3;
        } else if (this.rooms >= 3 && this.value <= 10000) {
            this.premium += 10.8;
        } else if (this.rooms < 3 && this.value > 10000) {
            this.premium += 11.3;
        } else if (this.rooms >= 3 && this.value > 10000) {
            this.premium += 11.8;
        } else if (this.rooms < 3 && this.value > 30000) {
            this.premium += 12.3;
        } else if (this.rooms >= 3 && this.value > 30000) {
            this.premium += 12.8;
        }
        if (this.insuranceOptions.replacementNew.state) {
            this.premium += this.insuranceOptions.replacementNew.cost;
        }
        if (this.insuranceOptions.dependency.state) {
            this.premium += this.insuranceOptions.dependency.cost;
        }
        if (this.insuranceOptions.occupancy.state) {
            this.premium += this.insuranceOptions.occupancy.cost;
        }
        if (this.insuranceOptions.hotspot.state) {
            this.premium += this.insuranceOptions.hotspot.cost;
        }
        if (this.insuranceOptions.alarm.state) {
            this.premium += this.insuranceOptions.alarm.cost;
        }
        if (this.insuranceOptions.deductible.state) {
            this.premium += this.insuranceOptions.deductible.cost;
        }
    }
}

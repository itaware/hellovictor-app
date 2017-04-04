import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'hv-valuable-item',
  templateUrl: './valuable-item.component.html',
  styleUrls: ['./valuable-item.component.scss']
})
export class ValuableItemComponent implements OnInit {
  origin: string;

  constructor(private router: Router, private route: ActivatedRoute, public quoteService: QuoteService, private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
    this.origin = this.route.snapshot.params.origin;
  }

  validate() {
    this.quoteService.addValuableItem();
    this.router.navigate(['/quote/summary']);
  }

  goBack() {
    if (this.origin === 'objets') {
      this.router.navigate(['/product/valuable-item']);
    } else {
      this.router.navigate(['/quote/summary'])
    }
  }

  get purchaseDate(): Date {
    let purchaseDate: Date;
    if (this.quoteService.valuableItem.purchaseDate) {
      purchaseDate = moment(this.quoteService.valuableItem.purchaseDate, 'DD/MM/YYYY').toDate();
    } else {
      purchaseDate = new Date();
    }
    return purchaseDate;
  }

  set purchaseDate(date: Date) {
    this.quoteService.valuableItem.purchaseDate = moment(date).format('DD/MM/YYYY');
    this.quoteService.calculAmount();
  }

}

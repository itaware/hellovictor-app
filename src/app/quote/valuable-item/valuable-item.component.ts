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
  purchaseDate: string;

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

  format() {
    this.purchaseDate = moment(this.quoteService.valuableItem.purchaseDate, 'DDMMYYYY').format('DD/MM/YYYY');
    this.quoteService.calculAmount();
  }

  unformat() {
    this.purchaseDate = this.quoteService.valuableItem.purchaseDate;
  }

}

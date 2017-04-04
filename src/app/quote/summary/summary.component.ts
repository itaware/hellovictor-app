import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Router } from "@angular/router";

@Component({
  selector: 'hv-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router, public quoteService: QuoteService) { }

  ngOnInit() {
  }

  getValuableItem(vi) {
    this.quoteService.valuableItem = vi;
    this.router.navigate(['/quote/valuable-item', vi.type, 'habitation']);
  }

  delete(vi) {
    this.quoteService.valuableItems.splice(this.quoteService.valuableItems.indexOf(vi), 1);
  }

  deleteHabitation() {
    this.quoteService.habitation = null;
  }
}

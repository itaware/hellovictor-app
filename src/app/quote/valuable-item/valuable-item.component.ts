import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Router } from "@angular/router";

@Component({
  selector: 'hv-valuable-item',
  templateUrl: './valuable-item.component.html',
  styleUrls: ['./valuable-item.component.scss']
})
export class ValuableItemComponent implements OnInit {

  constructor(private router: Router, private quoteService: QuoteService) { }

  ngOnInit() {
  }

  validate() {
    this.quoteService.addValuableItem();
    this.router.navigate(['/quote/habitation-summary']);
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from "../../quote/quote.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'hv-valuable-item-page',
  templateUrl: './valuable-item-page.component.html',
  styleUrls: ['./valuable-item-page.component.scss']
})
export class ValuableItemPageComponent implements OnInit {
  baseUrl: string = '/assets/';

  constructor(private router: Router, private route: ActivatedRoute, private quoteService: QuoteService, private element: ElementRef) { 
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

  loadQuote(type) {
    if (type === 'digital') {
    } else if (type === 'hobby') {
    } else if (type === 'precious') {
    }
    this.router.navigate(['quote', 'valuable-item', 'objets']);
  }

}

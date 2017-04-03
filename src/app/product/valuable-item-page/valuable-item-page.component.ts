import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { QuoteService } from '../../quote/quote.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'hv-valuable-item-page',
  templateUrl: './valuable-item-page.component.html',
  styleUrls: ['./valuable-item-page.component.scss']
})
export class ValuableItemPageComponent implements OnInit, AfterViewInit {
  baseUrl = '/assets/';
  @ViewChildren('observe') observedElements: QueryList<any>;

  constructor(private router: Router, private route: ActivatedRoute, public quoteService: QuoteService, private element: ElementRef, private metricsService: MetricsService) { 
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

  ngAfterViewInit() {
    this.observedElements.forEach((e) => this.metricsService.observe(e));
  }

  loadQuote(type) {
    if (type === 'digital') {
    } else if (type === 'hobby') {
    } else if (type === 'precious') {
    }
    this.router.navigate(['quote', 'valuable-item', 'objets']);
  }

}

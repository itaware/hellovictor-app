import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../quote/quote.service';
import { Habitation } from '../../quote/habitation';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'hv-habitation-page',
  templateUrl: './habitation-page.component.html',
  styleUrls: ['./habitation-page.component.scss']
})
export class HabitationPageComponent implements OnInit, AfterViewInit {
  baseUrl = '/assets/';
  @ViewChildren('observe') observedElements: QueryList<any>;


  constructor(private router: Router, public quoteService: QuoteService, private element: ElementRef, private metricsService: MetricsService) {
  }

  ngOnInit() {
    this.element.nativeElement.ownerDocument.getElementById('anchor').scrollIntoView();
  }

  ngAfterViewInit() {
    this.observedElements.forEach((e) => this.metricsService.observe(e));
  }

  loadQuote(type) {
    this.router.navigate(['quote', 'habitation', type]);
  }

}

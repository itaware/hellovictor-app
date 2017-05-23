import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private element: ElementRef,
    private metricsService: MetricsService) {
  }

  ngOnInit() {
    if (this.element.nativeElement.ownerDocument) {
      this.element.nativeElement.ownerDocument.getElementById('anchor').scrollIntoView();
    }
  }

  ngAfterViewInit() {
    this.observedElements.forEach((e) => this.metricsService.observe(e));
  }

  loadQuote(type) {
    this.router.navigate(['quote', 'valuable-item', type, 'objets']);
  }

}

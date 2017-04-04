import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostBinding } from '@angular/core';
import { MetricsService } from '../services/metrics.service';

@Component({
  selector: 'hv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  baseUrl = '/assets/';
  @ViewChildren('observe') observedElements: QueryList<any>;

  constructor(private metricsService: MetricsService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.observedElements.forEach((e) => this.metricsService.observe(e));
  }
}

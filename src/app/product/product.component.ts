import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MdDialog } from '@angular/material';
import { MetricsService } from '../services/metrics.service';
import { style } from '@angular/animations';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'hv-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  baseUrl = '/assets/';
  page = 'objets';
  @ViewChildren('observe') observedElements: QueryList<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    //private dialog: MdDialog,
    private element: ElementRef,
    private metricsService: MetricsService) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.page = this.route.firstChild.snapshot.data.page;
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.observedElements.forEach((e) => this.metricsService.observe(e));
  }

  openVideo() {
    // this.dialog.open(VideoDialogComponent, {
    //   width: '80%',
    //   //overlayClass: 'video-dialog'
    // });
  }

  goToQuote() {
    if (this.page === 'habitation') {
      this.router.navigate(['quote', 'habitation']);
    } else {
      this.router.navigate(['quote', 'valuable-item', '1', 'objets']);
    }
  }

  scrollToDetail() {
    this.element.nativeElement.ownerDocument.getElementById('detail').scrollIntoView();
  }

}

@Component({
  selector: 'hv-video',
  template: '<iframe src="https://www.youtube.com/embed/YmbaM0gYACc?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>',
})
export class VideoDialogComponent { }

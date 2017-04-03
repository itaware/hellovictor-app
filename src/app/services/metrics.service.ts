import { Injectable } from '@angular/core';
declare const dataLayer: any;

@Injectable()
export class MetricsService {
  intersectionObserver: IntersectionObserver;

  constructor() {
    this.intersectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0.5) {
          dataLayer.push({
            event: 'impression',
            elementID: entry.target.id + '-impr'
          });
        }
      });
    }, {
      threshold: [0.5]
    });
  }

  observe(element) {
    this.intersectionObserver.observe(element.nativeElement);
  }

}

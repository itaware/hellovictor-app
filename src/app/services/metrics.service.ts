import { Injectable } from '@angular/core';
import { detectIE } from '../utils/detectIE';
declare const dataLayer: any;

@Injectable()
export class MetricsService {
  intersectionObserver: IntersectionObserver;

  constructor() {
    if (detectIE() > 10) {
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
  }

  observe(element) {
    if (this.intersectionObserver) {
      this.intersectionObserver.observe(element.nativeElement);
    }
  }

}

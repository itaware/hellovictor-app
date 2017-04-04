import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'hv-page-transition',
  template: '<div [@routeAnimation]="animation.state"><ng-content></ng-content></div>',
  animations: [routerTransition]
})
export class PageTransitionComponent implements OnInit {
  @Input() routes: string[] = [''];
  @Input() animation: any = {
    state: 'leave',
    enterDelay: 0
  };
  constructor(private router: Router) {
    this.animation.state = 'leave';
    router.events.filter((event: any) => {
      for (let i = 0; i < this.routes.length; i++) {
        if (event.url && event.url.indexOf(this.routes[i]) > -1) {
          return true;
        }
      }
      return false;
    }).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.animation.state = 'leave';
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.animation.state = 'out';
        setTimeout(() => {
          this.animation.state = 'enter';
        }, 0);
      }
    });
  }

  ngOnInit() {
  }

}

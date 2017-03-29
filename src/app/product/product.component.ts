import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'hv-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  baseUrl: string = '/assets/';
  page: string = 'objets';

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.page = this.route.firstChild.snapshot.data.page;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'hv-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  baseUrl: string = '/assets/';
  page: string = 'objets';

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MdDialog) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) => {
        this.page = this.route.firstChild.snapshot.data.page;
      });
  }

  ngOnInit() {
  }

  openVideo() {
    this.dialog.open(VideoDialogComponent);
  }

}

@Component({
  selector: 'hv-video',
  template: '<iframe src="https://www.youtube.com/embed/YmbaM0gYACc?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
})
export class VideoDialogComponent { }
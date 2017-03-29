import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'hv-valuable-item',
  templateUrl: './valuable-item.component.html',
  styleUrls: ['./valuable-item.component.scss']
})
export class ValuableItemComponent implements OnInit {
  isDirect: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.isDirect = this.route.snapshot.data.direct;
  }

  validate() {
    this.quoteService.addValuableItem();
    this.router.navigate(['/quote/summary']);
  }

  goBack() {
    if (this.isDirect) {
      this.router.navigate(['/product/valuable-item']);
    } else {
      this.router.navigate(['/quote/summary'])
    }
  }

}

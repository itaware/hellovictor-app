import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}

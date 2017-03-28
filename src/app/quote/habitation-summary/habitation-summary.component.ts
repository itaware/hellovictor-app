import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-habitation-summary',
  templateUrl: './habitation-summary.component.html',
  styleUrls: ['./habitation-summary.component.scss']
})
export class HabitationSummaryComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}

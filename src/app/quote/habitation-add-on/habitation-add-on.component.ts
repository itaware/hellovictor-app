import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-habitation-add-on',
  templateUrl: './habitation-add-on.component.html',
  styleUrls: ['./habitation-add-on.component.scss']
})
export class HabitationAddOnComponent implements OnInit {

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.calculAmount();
  }


}

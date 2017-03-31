import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { QuoteService } from "../../quote/quote.service";

@Component({
  selector: 'hv-habitation-page',
  templateUrl: './habitation-page.component.html',
  styleUrls: ['./habitation-page.component.scss']
})
export class HabitationPageComponent implements OnInit {
  baseUrl: string = '/assets/';

  constructor(private router: Router, public quoteService: QuoteService, private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

  loadQuote(type) {
    if (type === 'studio') {
      this.quoteService.roomsNumber = 1;
      this.quoteService.habitationValue = 10000;
    } else if (type === 'flat') {
      this.quoteService.roomsNumber = 3;
      this.quoteService.habitationValue = 30000;
    } else if (type === 'house') {
      this.quoteService.roomsNumber = 5;
      this.quoteService.habitationValue = 50000;
    }
    this.router.navigate(['quote', 'habitation']);
  }

}

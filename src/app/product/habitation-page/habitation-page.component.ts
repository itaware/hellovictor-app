import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { QuoteService } from "../../quote/quote.service";
import { Habitation } from "../../quote/habitation";

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
    this.router.navigate(['quote', 'habitation', type]);
  }

}

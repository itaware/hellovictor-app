import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hv-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  private baseUrl = 'assets/';

  constructor() { }

  ngOnInit() {
  }

}

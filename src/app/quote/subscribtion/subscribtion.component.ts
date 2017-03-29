import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.scss']
})
export class SubscribtionComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}

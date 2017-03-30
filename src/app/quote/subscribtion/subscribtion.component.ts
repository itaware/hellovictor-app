import { Component, OnInit } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Router } from "@angular/router";

@Component({
  selector: 'hv-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.scss']
})
export class SubscribtionComponent implements OnInit {

  constructor(private router: Router, private quoteService: QuoteService) { }

  ngOnInit() {
  }

  validQuote() {
    // register quote on server
    this.router.navigate(['/quote/finish']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { QuoteService } from "../quote.service";

@Component({
  selector: 'hv-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.scss']
})
export class SubscribtionComponent implements OnInit {

  constructor(private router: Router, public quoteService: QuoteService, private http: Http) { }

  ngOnInit() {
  }

  validQuote() {
    // register quote on server
    this.quoteService.sendQuote();
    this.router.navigate(['/quote/finish']);
  }

}

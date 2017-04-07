import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { QuoteService } from '../quote.service';
import { MdDialogRef, MdDialog } from '@angular/material';
import { UncompleteDialogComponent } from '../uncomplete-dialog/uncomplete-dialog.component';

@Component({
  selector: 'hv-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.scss']
})
export class SubscribtionComponent implements OnInit {

  constructor(
    private router: Router,
    public quoteService: QuoteService,
    private http: Http,
    private dialog: MdDialog) { }

  ngOnInit() {
  }

  validQuote() {
    if (!this.quoteService.email) {
      this.uncomplete();
    } else {
      this.quoteService.sendQuote();
      this.router.navigate(['/quote/finish']);
    }
  }

  uncomplete() {
    const dialogContent: MdDialogRef<UncompleteDialogComponent> = this.dialog.open(UncompleteDialogComponent);
    dialogContent.componentInstance.message = 'Pour valider il nous faut au moins votre <b>email</b> SVP';
  }

}

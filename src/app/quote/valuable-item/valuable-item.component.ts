import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as moment from 'moment';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UncompleteDialogComponent } from '../uncomplete-dialog/uncomplete-dialog.component';

@Component({
  selector: 'hv-valuable-item',
  templateUrl: './valuable-item.component.html',
  styleUrls: ['./valuable-item.component.scss']
})
export class ValuableItemComponent implements OnInit {
  origin: string;
  private _purchaseDate: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public quoteService: QuoteService,
    private element: ElementRef,
    public dialog: MdDialog) {
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
    this.origin = this.route.snapshot.params.origin;
    if (!this.quoteService.valuableItem.type) {
      this.quoteService.valuableItem.type = +this.route.snapshot.params.type;
    }
  }

  validate() {
    if (!this.quoteService.valuableItem.name || !this.quoteService.valuableItem.purchaseAmount || !this.quoteService.valuableItem.purchaseDate) {
      this.uncomplete();
    } else {
      this.quoteService.addValuableItem();
      this.router.navigate(['/quote/summary']);
    }
  }

  goBack() {
    if (this.origin === 'objets') {
      this.router.navigate(['/product/valuable-item']);
    } else {
      this.router.navigate(['/quote/summary']);
    }
  }

  exemple(): string {
    switch (this.quoteService.valuableItem.type) {
      case 1: return 'iPhone 7plus';
      case 2: return 'Vélo électrique GoCycle';
      case 3: return 'montre Tudor';
    }
  }

  get purchaseDate(): Date {
    if (!this._purchaseDate) {
      if (this.quoteService.valuableItem.purchaseDate) {
        this._purchaseDate = moment(this.quoteService.valuableItem.purchaseDate, 'DD/MM/YYYY').toDate();
      } else {
        this._purchaseDate = new Date();
      }
    }
    return this._purchaseDate;
  }

  set purchaseDate(date: Date) {
    this._purchaseDate = date;
    this.quoteService.valuableItem.purchaseDate = moment(date).format('DD/MM/YYYY');
    this.quoteService.calculAmount();
  }

  uncomplete() {
    const dialogContent: MdDialogRef<UncompleteDialogComponent> = this.dialog.open(UncompleteDialogComponent);
    dialogContent.componentInstance.message = 'Pour valider il nous faut au moins un <b>nom</b>, un <b>montant</b> et une <b>date d\'achat</b> SVP';
  }

}

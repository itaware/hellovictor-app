import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'hv-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  constructor(
    private router: Router,
    public quoteService: QuoteService,
    private element: ElementRef,
    private dialog: MdDialog) { }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

  getValuableItem(vi) {
    this.quoteService.valuableItem = vi;
    this.router.navigate(['/quote/valuable-item', vi.type, 'habitation']);
  }

  delete(vi) {
    const dialogRef = this.dialog.open(ConfirmDeteteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.quoteService.valuableItems.splice(this.quoteService.valuableItems.indexOf(vi), 1);
      }
    });
  }

  deleteHabitation() {
    const dialogRef = this.dialog.open(ConfirmDeteteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.quoteService.habitation = null;
      }
    });
  }
}

@Component({
  template: `<div class="text-center"><div class="material-icons text-primary icon-alone-md">info_outline</div>
  <div md-dialog-content><p>Voulez-vous vraiment supprimer ?</p></div>
<div md-dialog-actions>
  <button md-button (click)="dialogRef.close(true)" class="btn btn-raised btn-primary">Oui</button>
  <button md-button (click)="dialogRef.close(false)" class="btn btn-raised btn-default">Non</button>
</div></div>`
})
export class ConfirmDeteteDialogComponent {
  constructor(public dialogRef: MdDialogRef<ConfirmDeteteDialogComponent>) { }
}

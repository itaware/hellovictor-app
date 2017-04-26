import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Habitation } from '../habitation';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UncompleteDialogComponent } from '../uncomplete-dialog/uncomplete-dialog.component';

@Component({
  selector: 'hv-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {
  private isDialogOpen = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public quoteService: QuoteService,
    private element: ElementRef,
    private dialog: MdDialog) {
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
    if (!this.quoteService.habitation) {
      this.quoteService.habitation = new Habitation(this.route.snapshot.params.type);
    }
    this.quoteService.calculAmount();
  }

  valid() {
    if (!this.quoteService.habitation.city && !this.quoteService.habitation.square) {
      this.uncomplete();
    } else {
      this.router.navigate(['quote', 'habitation-add-on']);
    }
  }

  uncomplete() {
    if (!this.isDialogOpen) {
      const dialogContent: MdDialogRef<UncompleteDialogComponent> = this.dialog.open(UncompleteDialogComponent);
      dialogContent.componentInstance.message = 'Pour valider il nous faut au moins votre <b>ville</b> et <b>quartier</b> d\'habitation SVP';
      this.isDialogOpen = true;
      dialogContent.afterClosed().subscribe(() => this.isDialogOpen = false);
    }
  }

  goBack() {
    this.router.navigate(['/product/habitation']).then(() => this.quoteService.habitation = null);
  }

}

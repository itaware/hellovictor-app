import { Component, OnInit, ElementRef } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Habitation } from '../habitation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hv-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  constructor(private route: ActivatedRoute, public quoteService: QuoteService, private element: ElementRef) { 
  }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
    if (!this.quoteService.habitation) {
      this.quoteService.habitation = new Habitation(this.route.snapshot.params.type);
    }
    this.quoteService.calculAmount();
  }


}

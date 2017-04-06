import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'hv-habitation-guarantees',
  templateUrl: './habitation-guarantees.component.html',
  styleUrls: ['./habitation-guarantees.component.scss'],
  animations: [routerTransition]
})
export class HabitationGuaranteesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.scrollIntoView();
  }

}

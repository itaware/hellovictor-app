import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hv-valuable-item-guarantees',
  templateUrl: './valuable-item-guarantees.component.html',
  styleUrls: ['./valuable-item-guarantees.component.scss']
})
export class ValuableItemGuaranteesComponent implements OnInit {
  origin: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.origin = this.route.snapshot.params.origin;
  }

  goBack() {
    if (this.origin === 'objets') {
      this.router.navigate(['/quote/valuable-item', 0, 'objets']);
    } else {
      this.router.navigate(['/quote/valuable-item/habitation'])
    }
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteComponent } from './quote.component';
import { HabitationComponent } from './habitation/habitation.component';
import { HabitationAddOnComponent } from './habitation-add-on/habitation-add-on.component';
import { SummaryComponent } from './summary/summary.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';
import { ValuableItemComponent } from './valuable-item/valuable-item.component';
import { ValuableItemGuaranteesComponent } from './valuable-item-guarantees/valuable-item-guarantees.component';
import { ValuableItemsComponent } from './valuable-items/valuable-items.component';
import { ValuableItemsSummaryComponent } from './valuable-items-summary/valuable-items-summary.component';
import { HabitationGuaranteesComponent } from './habitation-guarantees/habitation-guarantees.component';
import { FinishComponent } from './finish/finish.component';

const quoteRoutes: Routes = [
  {path: 'habitation', component: HabitationComponent},
  {path: 'habitation/:type', component: HabitationComponent},
  {path: 'habitation-guarantees', component: HabitationGuaranteesComponent},
  {path: 'habitation-add-on', component: HabitationAddOnComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'subscribtion', component: SubscribtionComponent},
  {path: 'valuable-item/:type/:origin', component: ValuableItemComponent},
  {path: 'valuable-item-guarantees/:origin', component: ValuableItemGuaranteesComponent},
  //{path: 'valuable-items', component: ValuableItemsComponent},
  //{path: 'valuable-items-summary', component: ValuableItemsSummaryComponent},
  {path: 'finish', component: FinishComponent},

]
@NgModule({
  imports: [
    RouterModule.forChild(quoteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuoteRoutingModule {}

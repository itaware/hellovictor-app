import { RouterModule, Routes } from '@angular/router';

import { QuoteComponent } from './quote/quote.component';
import { NgModule } from '@angular/core';
import { HabitationComponent } from './quote/habitation/habitation.component';
import { HabitationAddOnComponent } from './quote/habitation-add-on/habitation-add-on.component';
import { HabitationSummaryComponent } from './quote/habitation-summary/habitation-summary.component';
import { SubscribtionComponent } from './quote/subscribtion/subscribtion.component';
import { ValuableItemComponent } from './quote/valuable-item/valuable-item.component';
import { ValuableItemGuaranteesComponent } from './quote/valuable-item-guarantees/valuable-item-guarantees.component';
import { ValuableItemsComponent } from './quote/valuable-items/valuable-items.component';
import { ValuableItemsSummaryComponent } from './quote/valuable-items-summary/valuable-items-summary.component';
import { HomeComponent } from "./home/home.component";
import { ValuableItemPageComponent } from "./home/valuable-item-page/valuable-item-page.component";
import { HabitationPageComponent } from "./home/habitation-page/habitation-page.component";
import { HabitationGuaranteesComponent } from "./quote/habitation-guarantees/habitation-guarantees.component";

const routes: Routes = [
  {path: '', redirectTo: 'home/valuable-item', pathMatch: 'full'},
  {
    path: 'home', 
    component: HomeComponent,
    children: [
      {path: 'valuable-item', component: ValuableItemPageComponent},
      {path: 'habitation', component: HabitationPageComponent},
    ]
  },
  {path: 'quote/habitation', component: HabitationComponent},
  {path: 'quote/habitation-guarantees', component: HabitationGuaranteesComponent},
  {path: 'quote/habitation-add-on', component: HabitationAddOnComponent},
  {path: 'quote/habitation-summary', component: HabitationSummaryComponent},
  {path: 'quote/subscribtion', component: SubscribtionComponent},
  {path: 'quote/valuable-item', component: ValuableItemComponent},
  {path: 'quote/valuable-item-guarantees', component: ValuableItemGuaranteesComponent},
  {path: 'quote/valuable-items', component: ValuableItemsComponent},
  {path: 'quote/valuable-items-summary', component: ValuableItemsSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

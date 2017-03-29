import { RouterModule, Routes } from '@angular/router';

import { QuoteComponent } from './quote/quote.component';
import { NgModule } from '@angular/core';
import { HabitationComponent } from './quote/habitation/habitation.component';
import { HabitationAddOnComponent } from './quote/habitation-add-on/habitation-add-on.component';
import { SummaryComponent } from './quote/summary/summary.component';
import { SubscribtionComponent } from './quote/subscribtion/subscribtion.component';
import { ValuableItemComponent } from './quote/valuable-item/valuable-item.component';
import { ValuableItemGuaranteesComponent } from './quote/valuable-item-guarantees/valuable-item-guarantees.component';
import { ValuableItemsComponent } from './quote/valuable-items/valuable-items.component';
import { ValuableItemsSummaryComponent } from './quote/valuable-items-summary/valuable-items-summary.component';
import { HomeComponent } from "./home/home.component";
import { ValuableItemPageComponent } from "./product/valuable-item-page/valuable-item-page.component";
import { HabitationPageComponent } from "./product/habitation-page/habitation-page.component";
import { HabitationGuaranteesComponent } from "./quote/habitation-guarantees/habitation-guarantees.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'product', 
    component: ProductComponent,
    children: [
      {path: 'valuable-item', component: ValuableItemPageComponent, data: { page: 'objets' }},
      {path: 'habitation', component: HabitationPageComponent, data: { page: 'habitation' }},
    ]
  },
  {path: 'quote/habitation', component: HabitationComponent},
  {path: 'quote/habitation-guarantees', component: HabitationGuaranteesComponent},
  {path: 'quote/habitation-add-on', component: HabitationAddOnComponent},
  {path: 'quote/summary', component: SummaryComponent},
  {path: 'quote/subscribtion', component: SubscribtionComponent},
  {path: 'quote/valuable-item', component: ValuableItemComponent},
  {path: 'quote/valuable-item-direct', component: ValuableItemComponent, data : { direct: true }},
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

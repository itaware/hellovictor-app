import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ValuableItemPageComponent } from './product/valuable-item-page/valuable-item-page.component';
import { HabitationPageComponent } from './product/habitation-page/habitation-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    component: ProductComponent,
    children: [
      {path: 'valuable-item', component: ValuableItemPageComponent, data: { page: 'objets' }},
      {path: 'habitation', component: HabitationPageComponent, data: { page: 'habitation' }},
    ]
  },
  {
    path: 'quote',
    loadChildren: 'app/quote/quote.module#QuoteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

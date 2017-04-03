import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent, VideoDialogComponent } from './product/product.component';
import { ValuableItemPageComponent } from './product/valuable-item-page/valuable-item-page.component';
import { HabitationPageComponent } from './product/habitation-page/habitation-page.component';
import { QuoteService } from './quote/quote.service';
import { QuoteComponent } from './quote/quote.component';
import { HabitationComponent } from './quote/habitation/habitation.component';
import { HabitationAddOnComponent } from './quote/habitation-add-on/habitation-add-on.component';
import { SummaryComponent } from './quote/summary/summary.component';
import { SubscribtionComponent } from './quote/subscribtion/subscribtion.component';
import { ValuableItemComponent } from './quote/valuable-item/valuable-item.component';
import { ValuableItemsComponent } from './quote/valuable-items/valuable-items.component';
import { ValuableItemGuaranteesComponent } from './quote/valuable-item-guarantees/valuable-item-guarantees.component';
import { ValuableItemsSummaryComponent } from './quote/valuable-items-summary/valuable-items-summary.component';
import { HabitationGuaranteesComponent } from './quote/habitation-guarantees/habitation-guarantees.component';
import { FinishComponent } from './quote/finish/finish.component';
import { MetricsService } from './services/metrics.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    QuoteComponent,
    HabitationComponent,
    HabitationAddOnComponent,
    SummaryComponent,
    SubscribtionComponent,
    ValuableItemComponent,
    ValuableItemsComponent,
    ValuableItemGuaranteesComponent,
    ValuableItemsSummaryComponent,
    HomeComponent,
    ValuableItemPageComponent,
    HabitationPageComponent,
    HabitationGuaranteesComponent,
    ProductComponent,
    VideoDialogComponent,
    FinishComponent
  ],
  entryComponents: [
    VideoDialogComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    QuoteService,
    MetricsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

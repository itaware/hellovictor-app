import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { QuoteService } from './quote.service';
import { QuoteComponent } from './quote.component';
import { HabitationComponent } from './habitation/habitation.component';
import { HabitationAddOnComponent } from './habitation-add-on/habitation-add-on.component';
import { SummaryComponent, ConfirmDeteteDialogComponent } from './summary/summary.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';
import { ValuableItemComponent } from './valuable-item/valuable-item.component';
import { ValuableItemsComponent } from './valuable-items/valuable-items.component';
import { ValuableItemGuaranteesComponent } from './valuable-item-guarantees/valuable-item-guarantees.component';
import { ValuableItemsSummaryComponent } from './valuable-items-summary/valuable-items-summary.component';
import { HabitationGuaranteesComponent } from './habitation-guarantees/habitation-guarantees.component';
import { FinishComponent } from './finish/finish.component';
import { UncompleteDialogComponent } from './uncomplete-dialog/uncomplete-dialog.component';
import { QuoteRoutingModule } from './quote-routing.module';
import { DatepickerComponent } from '../utils/datepicker/datepicker.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    QuoteRoutingModule,
    SharedComponentsModule
 ],
  declarations: [
    QuoteComponent,
    HabitationComponent,
    HabitationAddOnComponent,
    SummaryComponent,
    SubscribtionComponent,
    ValuableItemComponent,
    ValuableItemsComponent,
    ValuableItemGuaranteesComponent,
    ValuableItemsSummaryComponent,
    HabitationGuaranteesComponent,
    FinishComponent,
    UncompleteDialogComponent,
    ConfirmDeteteDialogComponent,
    DatepickerComponent
  ],
  entryComponents: [
    UncompleteDialogComponent,
    ConfirmDeteteDialogComponent
  ],
  providers: [
    QuoteService
  ]
})
export class QuoteModule {}

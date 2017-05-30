import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent, VideoDialogComponent } from './product/product.component';
import { ValuableItemPageComponent } from './product/valuable-item-page/valuable-item-page.component';
import { HabitationPageComponent } from './product/habitation-page/habitation-page.component';
import { MetricsService } from './services/metrics.service';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'hv-universal'
    }),
    MaterialModule,
    AppRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HabitationPageComponent,
    ValuableItemPageComponent,
    ProductComponent,
    VideoDialogComponent
  ],
  entryComponents: [
    VideoDialogComponent
  ],
  providers: [
    MetricsService
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }

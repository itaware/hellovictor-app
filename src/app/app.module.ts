import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent, VideoDialogComponent } from './product/product.component';
import { ValuableItemPageComponent } from './product/valuable-item-page/valuable-item-page.component';
import { HabitationPageComponent } from './product/habitation-page/habitation-page.component';
import { MetricsService } from './services/metrics.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'hv-universal'
    }),
    AppRoutingModule,
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

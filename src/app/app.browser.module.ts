import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { PageTransitionComponent } from './page-transition/page-transition.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppModule
 ],
  declarations: [
    PageTransitionComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }

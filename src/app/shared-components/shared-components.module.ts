import { NgModule } from '@angular/core';

import { ShareComponent } from './share/share.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShareComponent
  ],
  exports: [
    ShareComponent
  ]
})
export class SharedComponentsModule { }

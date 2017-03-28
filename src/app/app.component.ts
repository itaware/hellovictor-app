import { Component } from '@angular/core';

@Component({
  selector: 'hv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  type = 1;
  objects = [
    {
      name: 'MacBook Pro de Papa',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Samsung S6 de Oscar',
      updated: new Date('1/17/16'),
    },
    {
      name: 'iPad',
      updated: new Date('1/28/16'),
    }
  ];
}

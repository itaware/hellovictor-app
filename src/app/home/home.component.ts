import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseUrl: string = '/assets/';

  constructor() { }

  ngOnInit() {

  }

}

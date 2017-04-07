import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './uncomplete-dialog.component.html',
  styleUrls: ['./uncomplete-dialog.component.scss']
})
export class UncompleteDialogComponent implements OnInit {
  public message: string;

  constructor() { }

  ngOnInit() {
  }

}

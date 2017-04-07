import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompleteDialogComponent } from './uncomplete-dialog.component';

describe('UncompleteDialogComponent', () => {
  let component: UncompleteDialogComponent;
  let fixture: ComponentFixture<UncompleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncompleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

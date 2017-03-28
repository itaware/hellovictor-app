import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableItemsComponent } from './valuable-items.component';

describe('ValuableItemsComponent', () => {
  let component: ValuableItemsComponent;
  let fixture: ComponentFixture<ValuableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

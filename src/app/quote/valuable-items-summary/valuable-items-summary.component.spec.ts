import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableItemsSummaryComponent } from './valuable-items-summary.component';

describe('ValuableItemsSummaryComponent', () => {
  let component: ValuableItemsSummaryComponent;
  let fixture: ComponentFixture<ValuableItemsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuableItemsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableItemsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

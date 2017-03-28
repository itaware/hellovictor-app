import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableItemGuaranteesComponent } from './valuable-item-guarantees.component';

describe('ValuableItemGuaranteesComponent', () => {
  let component: ValuableItemGuaranteesComponent;
  let fixture: ComponentFixture<ValuableItemGuaranteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuableItemGuaranteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableItemGuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

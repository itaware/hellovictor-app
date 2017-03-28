import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationSummaryComponent } from './habitation-summary.component';

describe('HabitationSummaryComponent', () => {
  let component: HabitationSummaryComponent;
  let fixture: ComponentFixture<HabitationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

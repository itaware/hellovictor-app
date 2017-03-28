import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationAddOnComponent } from './habitation-add-on.component';

describe('HabitationAddOnComponent', () => {
  let component: HabitationAddOnComponent;
  let fixture: ComponentFixture<HabitationAddOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationAddOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationAddOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationGuaranteesComponent } from './habitation-guarantees.component';

describe('HabitationGuaranteesComponent', () => {
  let component: HabitationGuaranteesComponent;
  let fixture: ComponentFixture<HabitationGuaranteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationGuaranteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationGuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

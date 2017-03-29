import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationPageComponent } from './habitation-page.component';

describe('HabitationPageComponent', () => {
  let component: HabitationPageComponent;
  let fixture: ComponentFixture<HabitationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

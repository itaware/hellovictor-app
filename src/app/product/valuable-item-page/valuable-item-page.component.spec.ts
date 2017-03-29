import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuableItemPageComponent } from './valuable-item-page.component';

describe('ValuableItemPageComponent', () => {
  let component: ValuableItemPageComponent;
  let fixture: ComponentFixture<ValuableItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuableItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuableItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

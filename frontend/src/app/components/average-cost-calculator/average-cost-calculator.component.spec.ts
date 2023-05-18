import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCostCalculatorComponent } from './average-cost-calculator.component';

describe('AverageCostCalculatorComponent', () => {
  let component: AverageCostCalculatorComponent;
  let fixture: ComponentFixture<AverageCostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageCostCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageCostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

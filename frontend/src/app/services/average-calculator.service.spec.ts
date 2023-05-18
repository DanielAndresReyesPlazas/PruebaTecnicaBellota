import { TestBed } from '@angular/core/testing';

import { AverageCalculatorService } from './average-calculator.service';

describe('AverageCalculatorService', () => {
  let service: AverageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

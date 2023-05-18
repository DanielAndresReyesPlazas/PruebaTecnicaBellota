import { TestBed } from '@angular/core/testing';

import { UpdatePricesService } from './update-prices.service';

describe('UpdatePricesService', () => {
  let service: UpdatePricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

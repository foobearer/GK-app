import { TestBed } from '@angular/core/testing';

import { OrdereseService } from './orderese.service';

describe('OrdereseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdereseService = TestBed.get(OrdereseService);
    expect(service).toBeTruthy();
  });
});

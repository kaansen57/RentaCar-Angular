import { TestBed } from '@angular/core/testing';

import { CarPropertyService } from './car-property.service';

describe('CarPropertyService', () => {
  let service: CarPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RentalTermService } from './rental-term.service';

describe('RentalTermService', () => {
  let service: RentalTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

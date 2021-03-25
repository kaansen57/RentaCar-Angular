import { TestBed } from '@angular/core/testing';

import { UserjwtService } from './userjwt.service';

describe('UserjwtService', () => {
  let service: UserjwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserjwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

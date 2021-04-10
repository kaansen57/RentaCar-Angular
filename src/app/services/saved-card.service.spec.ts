import { TestBed } from '@angular/core/testing';

import { SavedCardService } from './saved-card.service';

describe('SavedCardService', () => {
  let service: SavedCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

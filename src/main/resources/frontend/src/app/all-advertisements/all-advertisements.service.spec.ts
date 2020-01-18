import { TestBed } from '@angular/core/testing';

import { AllAdvertisementsService } from './all-advertisements.service';

describe('AllAdvertisementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllAdvertisementsService = TestBed.get(AllAdvertisementsService);
    expect(service).toBeTruthy();
  });
});

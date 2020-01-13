import { TestBed } from '@angular/core/testing';

import { AdvertisementServiceService } from './advertisement-service.service';

describe('AdvertisementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertisementServiceService = TestBed.get(AdvertisementServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TouristicservicesService } from './touristicservices.service';

describe('TouristicservicesService', () => {
  let service: TouristicservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristicservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

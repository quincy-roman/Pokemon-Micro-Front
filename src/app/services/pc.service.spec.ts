import { TestBed } from '@angular/core/testing';

import { PcService } from './pc.service';

describe('PcService', () => {
  let service: PcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

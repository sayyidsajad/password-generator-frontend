import { TestBed } from '@angular/core/testing';

import { PassGenService } from './pass-gen.service';

describe('PassGenService', () => {
  let service: PassGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

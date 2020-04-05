import { TestBed } from '@angular/core/testing';

import { CycleformService } from './cycleform.service';

describe('CycleformService', () => {
  let service: CycleformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

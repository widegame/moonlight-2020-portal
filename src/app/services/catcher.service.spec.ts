import { TestBed } from '@angular/core/testing';

import { CatcherService } from './catcher.service';

describe('CatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatcherService = TestBed.get(CatcherService);
    expect(service).toBeTruthy();
  });
});

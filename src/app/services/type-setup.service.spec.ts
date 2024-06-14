import { TestBed } from '@angular/core/testing';

import { TypeSetupService } from './type-setup.service';

describe('TypeSetupService', () => {
  let service: TypeSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

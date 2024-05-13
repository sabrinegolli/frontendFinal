import { TestBed } from '@angular/core/testing';
import { UnifiedSearchService } from './unifiedsearch.service';

describe('UnifiedsearchService', () => {
  let service: UnifiedSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnifiedSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

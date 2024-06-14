import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUnifiedSearchComponent } from './incident-unified-search.component';

describe('IncidentUnifiedSearchComponent', () => {
  let component: IncidentUnifiedSearchComponent;
  let fixture: ComponentFixture<IncidentUnifiedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentUnifiedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentUnifiedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

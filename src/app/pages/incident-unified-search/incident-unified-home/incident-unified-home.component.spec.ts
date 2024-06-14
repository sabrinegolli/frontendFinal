import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUnifiedHomeComponent } from './incident-unified-home.component';

describe('IncidentUnifiedHomeComponent', () => {
  let component: IncidentUnifiedHomeComponent;
  let fixture: ComponentFixture<IncidentUnifiedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentUnifiedHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentUnifiedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

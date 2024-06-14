import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentUnifiedFormComponent } from './incident-unified-form.component';

describe('IncidentUnifiedFormComponent', () => {
  let component: IncidentUnifiedFormComponent;
  let fixture: ComponentFixture<IncidentUnifiedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentUnifiedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentUnifiedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

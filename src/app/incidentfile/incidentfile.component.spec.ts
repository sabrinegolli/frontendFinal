import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentfileComponent } from './incidentfile.component';

describe('IncidentfileComponent', () => {
  let component: IncidentfileComponent;
  let fixture: ComponentFixture<IncidentfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

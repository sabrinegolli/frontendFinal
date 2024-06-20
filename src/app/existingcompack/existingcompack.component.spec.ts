import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingcompackComponent } from './existingcompack.component';

describe('ExistingcompackComponent', () => {
  let component: ExistingcompackComponent;
  let fixture: ComponentFixture<ExistingcompackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExistingcompackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExistingcompackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

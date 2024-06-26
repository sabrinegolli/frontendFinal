import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUserComponent } from './management-user.component';

describe('ManagementUserComponent', () => {
  let component: ManagementUserComponent;
  let fixture: ComponentFixture<ManagementUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

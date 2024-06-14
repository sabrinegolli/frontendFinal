import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupManagmentComponent } from './setup-managment.component';

describe('SetupManagmentComponent', () => {
  let component: SetupManagmentComponent;
  let fixture: ComponentFixture<SetupManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

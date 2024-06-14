import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstockManagmentComponent } from './localstock-managment.component';

describe('LocalstockManagmentComponent', () => {
  let component: LocalstockManagmentComponent;
  let fixture: ComponentFixture<LocalstockManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalstockManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalstockManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

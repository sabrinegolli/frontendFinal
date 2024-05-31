import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatesaleComponent } from './validatesale.component';

describe('ValidatesaleComponent', () => {
  let component: ValidatesaleComponent;
  let fixture: ComponentFixture<ValidatesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatesaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

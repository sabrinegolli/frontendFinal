import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerfileComponent } from './customerfile.component';

describe('CustomerfileComponent', () => {
  let component: CustomerfileComponent;
  let fixture: ComponentFixture<CustomerfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

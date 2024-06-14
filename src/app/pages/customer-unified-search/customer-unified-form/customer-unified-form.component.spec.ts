import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnifiedFormComponent } from './customer-unified-form.component';

describe('CustomerUnifiedFormComponent', () => {
  let component: CustomerUnifiedFormComponent;
  let fixture: ComponentFixture<CustomerUnifiedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerUnifiedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerUnifiedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

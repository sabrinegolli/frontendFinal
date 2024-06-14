import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnifiedHomeComponent } from './tool-unified-home.component';

describe('CustomerUnifiedHomeComponent', () => {
  let component: CustomerUnifiedHomeComponent;
  let fixture: ComponentFixture<CustomerUnifiedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerUnifiedHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerUnifiedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

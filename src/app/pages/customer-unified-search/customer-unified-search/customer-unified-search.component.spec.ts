import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnifiedSearchComponent } from './customer-unified-search.component';

describe('CustomerUnifiedSearchComponent', () => {
  let component: CustomerUnifiedSearchComponent;
  let fixture: ComponentFixture<CustomerUnifiedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerUnifiedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerUnifiedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalescontractComponent } from './salescontract.component';

describe('SalescontractComponent', () => {
  let component: SalescontractComponent;
  let fixture: ComponentFixture<SalescontractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalescontractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalescontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

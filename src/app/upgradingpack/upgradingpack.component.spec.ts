import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradingpackComponent } from './upgradingpack.component';

describe('UpgradingpackComponent', () => {
  let component: UpgradingpackComponent;
  let fixture: ComponentFixture<UpgradingpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpgradingpackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpgradingpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

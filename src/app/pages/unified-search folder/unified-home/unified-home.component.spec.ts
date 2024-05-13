import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedHomeComponent } from './unified-home.component';

describe('UnifiedHomeComponent', () => {
  let component: UnifiedHomeComponent;
  let fixture: ComponentFixture<UnifiedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnifiedHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnifiedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

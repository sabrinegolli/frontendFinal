import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairstocklistComponent } from './repairstocklist.component';

describe('RepairstocklistComponent', () => {
  let component: RepairstocklistComponent;
  let fixture: ComponentFixture<RepairstocklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepairstocklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

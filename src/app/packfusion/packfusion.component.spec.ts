import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackfusionComponent } from './packfusion.component';

describe('PackfusionComponent', () => {
  let component: PackfusionComponent;
  let fixture: ComponentFixture<PackfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackfusionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

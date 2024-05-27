import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackactionComponent } from './packaction.component';

describe('PackactionComponent', () => {
  let component: PackactionComponent;
  let fixture: ComponentFixture<PackactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

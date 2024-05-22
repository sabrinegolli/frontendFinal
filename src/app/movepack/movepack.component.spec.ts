import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovepackComponent } from './movepack.component';

describe('MovepackComponent', () => {
  let component: MovepackComponent;
  let fixture: ComponentFixture<MovepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovepackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpackComponent } from './newpack.component';

describe('NewpackComponent', () => {
  let component: NewpackComponent;
  let fixture: ComponentFixture<NewpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

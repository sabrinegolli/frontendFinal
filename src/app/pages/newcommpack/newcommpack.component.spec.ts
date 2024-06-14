import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommpackComponent } from './newcommpack.component';

describe('NewcommpackComponent', () => {
  let component: NewcommpackComponent;
  let fixture: ComponentFixture<NewcommpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewcommpackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewcommpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

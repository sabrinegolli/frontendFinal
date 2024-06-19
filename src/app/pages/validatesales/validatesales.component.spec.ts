import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatesalesComponent } from './validatesales.component';

describe('ValidatesalesComponent', () => {
  let component: ValidatesalesComponent;
  let fixture: ComponentFixture<ValidatesalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatesalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

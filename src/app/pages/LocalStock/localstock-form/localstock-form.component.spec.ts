import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstockFormComponent } from './localstock-form.component';

describe('LocalstockFormComponent', () => {
  let component: LocalstockFormComponent;
  let fixture: ComponentFixture<LocalstockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalstockFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalstockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

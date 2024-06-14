import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstockListComponent } from './localstock-list.component';

describe('LocalstockListComponent', () => {
  let component: LocalstockListComponent;
  let fixture: ComponentFixture<LocalstockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalstockListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalstockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolhistoryComponent } from './toolhistory.component';

describe('ToolhistoryComponent', () => {
  let component: ToolhistoryComponent;
  let fixture: ComponentFixture<ToolhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

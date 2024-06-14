import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolUnifiedSearchComponent } from './tool-unified-search.component';

describe('ToolUnifiedSearchComponent', () => {
  let component: ToolUnifiedSearchComponent;
  let fixture: ComponentFixture<ToolUnifiedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolUnifiedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolUnifiedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

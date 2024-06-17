import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsearchComponent } from './toolsearch.component';

describe('ToolsearchComponent', () => {
  let component: ToolsearchComponent;
  let fixture: ComponentFixture<ToolsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

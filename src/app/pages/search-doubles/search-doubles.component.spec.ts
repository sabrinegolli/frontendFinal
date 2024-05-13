import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoublesComponent } from './search-doubles.component';

describe('SearchDoublesComponent', () => {
  let component: SearchDoublesComponent;
  let fixture: ComponentFixture<SearchDoublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDoublesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDoublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

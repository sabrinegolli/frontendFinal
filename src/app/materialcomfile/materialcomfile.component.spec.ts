import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcomfileComponent } from './materialcomfile.component';

describe('MaterialcomfileComponent', () => {
  let component: MaterialcomfileComponent;
  let fixture: ComponentFixture<MaterialcomfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialcomfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialcomfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

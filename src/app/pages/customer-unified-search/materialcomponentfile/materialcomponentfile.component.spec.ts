import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcomponentfileComponent } from './materialcomponentfile.component';

describe('MaterialcomponentfileComponent', () => {
  let component: MaterialcomponentfileComponent;
  let fixture: ComponentFixture<MaterialcomponentfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialcomponentfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialcomponentfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

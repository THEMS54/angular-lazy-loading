import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1ComponentComponent } from './feature1-component.component';

describe('Feature1ComponentComponent', () => {
  let component: Feature1ComponentComponent;
  let fixture: ComponentFixture<Feature1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feature1ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

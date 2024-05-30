import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2ComponentComponent } from './feature2-component.component';

describe('Feature2ComponentComponent', () => {
  let component: Feature2ComponentComponent;
  let fixture: ComponentFixture<Feature2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feature2ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

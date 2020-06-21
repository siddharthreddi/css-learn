import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightWidthComponent } from './height-width.component';

describe('HeightWidthComponent', () => {
  let component: HeightWidthComponent;
  let fixture: ComponentFixture<HeightWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

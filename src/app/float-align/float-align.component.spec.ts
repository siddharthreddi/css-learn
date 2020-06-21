import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatAlignComponent } from './float-align.component';

describe('FloatAlignComponent', () => {
  let component: FloatAlignComponent;
  let fixture: ComponentFixture<FloatAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsRgbHexHslComponent } from './colors-rgb-hex-hsl.component';

describe('ColorsRgbHexHslComponent', () => {
  let component: ColorsRgbHexHslComponent;
  let fixture: ComponentFixture<ColorsRgbHexHslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsRgbHexHslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsRgbHexHslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

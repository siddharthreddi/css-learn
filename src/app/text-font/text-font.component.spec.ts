import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFontComponent } from './text-font.component';

describe('TextFontComponent', () => {
  let component: TextFontComponent;
  let fixture: ComponentFixture<TextFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

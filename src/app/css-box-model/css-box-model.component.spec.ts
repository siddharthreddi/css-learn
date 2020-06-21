import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBoxModelComponent } from './css-box-model.component';

describe('CssBoxModelComponent', () => {
  let component: CssBoxModelComponent;
  let fixture: ComponentFixture<CssBoxModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssBoxModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

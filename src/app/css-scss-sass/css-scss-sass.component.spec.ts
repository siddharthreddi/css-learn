import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssScssSassComponent } from './css-scss-sass.component';

describe('CssScssSassComponent', () => {
  let component: CssScssSassComponent;
  let fixture: ComponentFixture<CssScssSassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssScssSassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssScssSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

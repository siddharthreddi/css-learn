import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSpanComponent } from './div-span.component';

describe('DivSpanComponent', () => {
  let component: DivSpanComponent;
  let fixture: ComponentFixture<DivSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

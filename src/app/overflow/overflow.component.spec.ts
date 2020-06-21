import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowComponent } from './overflow.component';

describe('OverflowComponent', () => {
  let component: OverflowComponent;
  let fixture: ComponentFixture<OverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

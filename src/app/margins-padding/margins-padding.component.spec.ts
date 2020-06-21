import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginsPaddingComponent } from './margins-padding.component';

describe('MarginsPaddingComponent', () => {
  let component: MarginsPaddingComponent;
  let fixture: ComponentFixture<MarginsPaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginsPaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginsPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

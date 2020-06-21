import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsAnimationsComponent } from './transitions-animations.component';

describe('TransitionsAnimationsComponent', () => {
  let component: TransitionsAnimationsComponent;
  let fixture: ComponentFixture<TransitionsAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionsAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionsAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

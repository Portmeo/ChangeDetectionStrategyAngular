import { ComponentFixture, TestBed } from '@angular/core/testing';

import { child1Component } from './child1.component';

describe('child1Component', () => {
  let component: child1Component;
  let fixture: ComponentFixture<child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ child1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

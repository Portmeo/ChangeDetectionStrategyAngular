import { ComponentFixture, TestBed } from '@angular/core/testing';

import { child2Component } from './child2.component';

describe('child2Component', () => {
  let component: child2Component;
  let fixture: ComponentFixture<child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ child2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { child3Component } from './child3.component';

describe('child3Component', () => {
  let component: child3Component;
  let fixture: ComponentFixture<child3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ child3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(child3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

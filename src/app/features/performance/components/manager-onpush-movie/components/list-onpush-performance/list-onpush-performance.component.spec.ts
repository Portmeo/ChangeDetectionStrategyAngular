import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOnpushPerformanceComponent } from './list-onpush-performance.component';

describe('ListOnpushPerformanceComponent', () => {
  let component: ListOnpushPerformanceComponent;
  let fixture: ComponentFixture<ListOnpushPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOnpushPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOnpushPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

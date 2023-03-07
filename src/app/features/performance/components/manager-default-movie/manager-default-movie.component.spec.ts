import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDefaultMovieComponent } from './manager-default-movie.component';

describe('ManagerDefaultMovieComponent', () => {
  let component: ManagerDefaultMovieComponent;
  let fixture: ComponentFixture<ManagerDefaultMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDefaultMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDefaultMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

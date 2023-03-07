import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOnpushMovieComponent } from './manager-onpush-movie.component';

describe('ManagerOnpushMovieComponent', () => {
  let component: ManagerOnpushMovieComponent;
  let fixture: ComponentFixture<ManagerOnpushMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOnpushMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOnpushMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosMoviesComponent } from './infos-movies.component';

describe('InfosMoviesComponent', () => {
  let component: InfosMoviesComponent;
  let fixture: ComponentFixture<InfosMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosSeriesComponent } from './infos-series.component';

describe('InfosSeriesComponent', () => {
  let component: InfosSeriesComponent;
  let fixture: ComponentFixture<InfosSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

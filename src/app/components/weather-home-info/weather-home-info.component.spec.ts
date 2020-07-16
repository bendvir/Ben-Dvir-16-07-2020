import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomeInfoComponent } from './weather-home-info.component';

describe('WeatherHomeInfoComponent', () => {
  let component: WeatherHomeInfoComponent;
  let fixture: ComponentFixture<WeatherHomeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHomeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

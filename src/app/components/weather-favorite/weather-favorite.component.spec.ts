import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavoriteComponent } from './weather-favorite.component';

describe('WeatherFavoriteComponent', () => {
  let component: WeatherFavoriteComponent;
  let fixture: ComponentFixture<WeatherFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

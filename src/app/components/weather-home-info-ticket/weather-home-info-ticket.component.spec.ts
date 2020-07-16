import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomeInfoTicketComponent } from './weather-home-info-ticket.component';

describe('WeatherHomeInfoTicketComponent', () => {
  let component: WeatherHomeInfoTicketComponent;
  let fixture: ComponentFixture<WeatherHomeInfoTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHomeInfoTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHomeInfoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

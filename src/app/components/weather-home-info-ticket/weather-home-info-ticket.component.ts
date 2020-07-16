import { Component, OnInit, Input } from '@angular/core';
import { TemperatureType } from 'src/app/shards/models/weather';
@Component({
  selector: 'app-weather-home-info-ticket',
  templateUrl: './weather-home-info-ticket.component.html',
  styleUrls: ['./weather-home-info-ticket.component.css']
})
export class WeatherHomeInfoTicketComponent implements OnInit {

  @Input() day : string;
  @Input() temperature : string;
  
  constructor(public TemperatureType: TemperatureType) { }

  ngOnInit(): void {
  }

}

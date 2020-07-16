import { Component, OnInit } from '@angular/core';
import { TemperatureType } from 'src/app/shards/models/weather';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

  typeTemeratory: SelectItem[];
  mySelect = true;

  constructor(public TemperatureType: TemperatureType) { 

    this.typeTemeratory = [
      { label: '°Celsius', value: true },
      { label: '°Fahrenheit', value: false }
    ];
  }

  selectTemperatoryOption(e) {
    this.TemperatureType.Celsius = e["value"];
  }
  
}

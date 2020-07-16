import { Component, OnInit } from '@angular/core';
import { FavoriteCities, TemperatureType } from 'src/app/shards/models/weather';
@Component({
  selector: 'app-weather-favorite',
  templateUrl: './weather-favorite.component.html',
  styleUrls: ['./weather-favorite.component.css']
})
export class WeatherFavoriteComponent implements OnInit {

  constructor(public FavoriteCities: FavoriteCities, public TemperatureType: TemperatureType) { }

  ngOnInit(): void {
  }

}

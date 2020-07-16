import { Component, OnInit } from '@angular/core';
import { City, ForecastInfo, FavoriteCities, TemperatureType } from 'src/app/shards/models/weather';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/shards/services/weather.service';

@Component({
  selector: 'app-weather-home-info',
  templateUrl: './weather-home-info.component.html',
  styleUrls: ['./weather-home-info.component.css']
})
export class WeatherHomeInfoComponent implements OnInit {

  cities: City[];
  search: FormGroup;
  currentCity: City;
  currentForecastInfo: ForecastInfo;
  todayForecasts: [];
  subscription: any;
  tempFlag: boolean;

  get func() { return this.search.controls; }
  constructor(
    private formBuilder: FormBuilder, 
    public watherService: WeatherService, 
    public FavoriteCities: FavoriteCities, 
    private route: ActivatedRoute,
    public TemperatureType: TemperatureType
    ) 
    {
    this.tempFlag = this.TemperatureType.Celsius;
    }
  ngAfterViewChecked() {
    if (this.tempFlag != this.TemperatureType.Celsius) {
      this.tempFlag = this.TemperatureType.Celsius;
      this.get5Days();
    }
  }

  ngOnInit(): void {
    // add validate for english letters
    this.search = this.formBuilder.group({
      city: ['', Validators.pattern('^[a-zA-Z ]*')]
    });

    // go back to default
    this.subscription = this.route
      .queryParams
      .subscribe(params => {
        if (params['key']) {
          this.currentCity = new City(params['key'], params['city'], true);
          this.selectCity(this.currentCity);
        }
        else {
          navigator.geolocation.getCurrentPosition(
            (data: any) => {
              this.searchCityByGeoPosition(data["coords"]["latitude"], data["coords"]["longitude"])
            },           
          );
        }

      });
  }

    // Get the 5-day forecast
    get5Days() {
      this.watherService.getForecastWeather(this.currentCity.Key)
        .subscribe((data: any) => {
            this.todayForecasts = data["DailyForecasts"];
          },
        );
    }

  //get the citiy key from Geo
  searchCityByGeoPosition(latitude, longitude) {
    this.watherService.getGeolocation(latitude, longitude)
      .subscribe((data: any) => {
          this.currentCity = data;
          var favoriteCity = this.FavoriteCities.Cities.find(c => c.City.Key == this.currentCity.Key);
          this.currentCity.isFavorite = favoriteCity ? true : false;
          this.selectCity(this.currentCity);
        },       
      );
  }

  //Get the current weather of from serach or default
  selectCity(event: City) {
    this.func.city.setValue(event.LocalizedName);
    this.currentCity = event;
    this.watherService.getDailyWeather(this.currentCity.Key)
      .subscribe((data: any) => {
          this.currentForecastInfo = data[0];
        },   
      );
    this.get5Days();
  }

  // set my favorite
  setFavorite() {
    this.currentCity.isFavorite = !this.currentCity.isFavorite;
    if (this.currentCity.isFavorite) {
      this.FavoriteCities.Cities.push({ City: this.currentCity, Condition: this.currentForecastInfo });
    }
    else {
      this.FavoriteCities.Cities = this.FavoriteCities.Cities.filter(city => city.City.Key != this.currentCity.Key);
    }
  }

  //AutoComplete search
  searchCity(event) {
    if (this.search.invalid) {
      return;
    }
    this.watherService.getAutocompleteSearch(event.query)
      .subscribe((data: any) => {
          this.cities = data;
        },  
      );
  }
  // destroy all my observables
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = "https://dataservice.accuweather.com/"; //u can also use enviorment to add that URL and APIKEY when u have many env..
  private APIKey = "IuNR4gCAFD9kG7Qt0XQStFssDlty5Aap";

  constructor(private httpClient: HttpClient) { }

  //Get city by geo
  public getGeolocation(latitude: string, longitude: string): Observable<any> {

    let getGeoURL = `${this.url}locations/v1/cities/geoposition/search?apikey=${this.APIKey}&q=${latitude},${longitude}`;

    return this.httpClient.get(getGeoURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Get Cities by Autocomplete
  public getAutocompleteSearch(searchedQuery: string): Observable<any> {

    let getCitiesURL = `${this.url}locations/v1/cities/autocomplete?apikey=${this.APIKey}&q=${searchedQuery}`;

    return this.httpClient.get(getCitiesURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Get current weather
  public getDailyWeather(fetchedCityIndex: string): Observable<any> {

    let getCurrentDailyURL = `${this.url}currentconditions/v1/${fetchedCityIndex}?apikey=${this.APIKey}`;

    return this.httpClient.get(getCurrentDailyURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Get 5 days daily forecast
  public getForecastWeather(locationKey: string): Observable<any> {

    let get5DaysURL = `${this.url}forecasts/v1/daily/5day/${locationKey}?apikey=${this.APIKey}&metric=true`;

    return this.httpClient.get(get5DaysURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Handle Errors
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('error, please try again later.');
  }
}

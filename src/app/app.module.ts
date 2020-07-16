import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherHomeInfoComponent } from './components/weather-home-info/weather-home-info.component';
import { WeatherHomeInfoTicketComponent } from './components/weather-home-info-ticket/weather-home-info-ticket.component';
import { WeatherFavoriteComponent } from './components/weather-favorite/weather-favorite.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TemperatureType, FavoriteCities } from './shards/models/weather';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    WeatherHomeInfoComponent,
    WeatherHomeInfoTicketComponent, 
    WeatherFavoriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AutoCompleteModule,
    SelectButtonModule 
  ],
  providers: [FavoriteCities, TemperatureType],
  bootstrap: [AppComponent]
})
export class AppModule { }

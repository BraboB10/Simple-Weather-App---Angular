import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  weatherData: any; // Store fetched weather data

  constructor(private weatherDataService: WeatherDataService, private weatherService: WeatherService) {}

  ngOnInit() {
    const selectedCity = this.weatherDataService.getCity();
    if (selectedCity) {
      this.getWeatherData(selectedCity);
    }
  }

  getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe((data: any) => {
      this.weatherData = data;
      console.log('Weather Data:', this.weatherData);
      console.log('API Response:', data);
    });
  }
}

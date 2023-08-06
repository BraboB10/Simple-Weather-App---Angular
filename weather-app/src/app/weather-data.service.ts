import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private selectedCity: string = '';

  getCity(): string {
    return this.selectedCity;
  }

  setCity(city: string): void {
    this.selectedCity = city;
  }
}

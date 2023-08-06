import { Component, Inject } from '@angular/core'; 
import { WeatherDataService } from '../weather-data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  city: string = '';

  constructor(
    @Inject(Router) private router: Router, 
    private weatherDataService: WeatherDataService
  ) {}

  searchWeather() {
    if (this.city) {
      console.log('Search performed for city:', this.city); 
      this.weatherDataService.setCity(this.city);
      this.router.navigate(['/weather']); 
    }
  }
}

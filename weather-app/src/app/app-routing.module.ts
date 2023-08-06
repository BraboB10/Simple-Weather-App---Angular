import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Redirect to /search on initial load
  { path: 'search', component: SearchBarComponent },
  { path: 'weather', component: WeatherDisplayComponent },
  { path: '**', redirectTo: '/search' }, // Redirect to /search for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

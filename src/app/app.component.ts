import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: string = 'Karachi';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  getWeather(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe(res => {
      this.weatherData = res;
      console.log(this.weatherData);
    });
  }

}

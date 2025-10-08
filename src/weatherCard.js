import { WeatherData } from './weatherData.js';

export class WeatherCard {
    constructor() {
        this.data = new WeatherData();
        this.icon = document.querySelector('.weather-icon');
        this.temp = document.querySelector('.weather-temp');
        this.desc = document.querySelector('.weather-desc');
        this.refreshBtn = document.querySelector('.refresh-btn');
    }

    init() {
        this.update();
        this.refreshBtn.addEventListener('click', () => this.update());
    }

    update() {
        const weather = this.data.getRandom();
        this.icon.textContent = weather.icon;
        this.temp.textContent = `${weather.temp}°C`;
        this.desc.textContent = weather.desc;
    }
}
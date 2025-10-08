export class WeatherData {
    constructor() {
        this.conditions = [
            { icon: '☀️', temp: 21, desc: 'Солнечно' },
            { icon: '⛅', temp: 18, desc: 'Облачно' },
            { icon: '🌧️', temp: 12, desc: 'Дождь' },
            { icon: '⛈️', temp: 9, desc: 'Гроза' },
        ];
    }

    getRandom() {
        return this.conditions[Math.floor(Math.random() * this.conditions.length)];
    }
}
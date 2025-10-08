import { WeatherCard } from './weatherCard.js';
import { ThemeManager } from './themeManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const weatherCard = new WeatherCard();
    const themeManager = new ThemeManager();
    
    weatherCard.init();
    themeManager.init();

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            weatherCard.update();
        } else if (e.key.toLowerCase() === 't') {
            e.preventDefault();
            themeManager.toggle();
        }
    });
});
export class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('weatherTheme') || 'day';
        this.themeBtn = document.querySelector('.theme-toggle');
        this.themeIcon = this.themeBtn.querySelector('.theme-icon');
    }

    init() {
        this.apply();
        this.themeBtn.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.theme = this.theme === 'day' ? 'night' : 'day';
        this.apply();
        localStorage.setItem('weatherTheme', this.theme);
    }

    apply() {
        document.body.classList.toggle('night-theme', this.theme === 'night');
        this.themeIcon.textContent = this.theme === 'day' ? '🌙' : '☀️';
    }
}
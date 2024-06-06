import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  template: `
    <button (click)="toggleLanguage()">Toggle Language</button>
    <p>{{ message }}</p>
  `,
})
export class MessageComponent {
  private language: 'en' | 'jp' = 'en';

  get message() {
    return this.language === 'en' ? 'Hello' : 'こんにちは';
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'jp' : 'en';
  }
}

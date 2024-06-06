import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-input',
  standalone: true,
  template: `<h1>{{ appName }}</h1>`,
})
export class TitleInputComponent {
  @Input() appName = '';
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div>
      <p>{{ message }}</p>
      <button (click)="close()">Close</button>
    </div>
  `,
  standalone: true,
})
export class ToastComponent {
  @Input() message = '';
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}

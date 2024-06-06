import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import { fireEvent, render, screen } from '@testing-library/angular';

describe('ToastComponent', () => {
  it('should render passed message', async () => {
    await render(`<app-toast [message]="message"></app-toast>`, {
      imports: [ToastComponent],
      componentProperties: { message: 'Test Message' },
    });

    expect(screen.getByText('Test Message')).toBeDefined();
  });

  it('should emit (closed) on "Close" button click', async () => {
    const onClosed = jasmine.createSpy();
    await render(
      `<app-toast [message]="message" (closed)="onClosed"></app-toast>`,
      {
        imports: [ToastComponent],
        componentProperties: { message: 'Test Message', onClosed },
      }
    );

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(onClosed).toHaveBeenCalled();
  });
});

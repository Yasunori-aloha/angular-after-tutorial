import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

import { fireEvent, render, screen } from '@testing-library/angular';

describe('MessageComponent', () => {
  // let component: MessageComponent;
  // let fixture: ComponentFixture<MessageComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [MessageComponent],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(MessageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('.message should be "Hello"', () => {
  //   // Assert
  //   expect(component.message).toBe('Hello');
  // });

  // it('.message should be "こんにちは" after toggleLanguage()', () => {
  //   // Act
  //   component.toggleLanguage();

  //   // Assert
  //   expect(component.message).toBe('こんにちは');
  // });

  // it('should render "こんにちは" after toggle language button click', () => {
  //   const element = fixture.nativeElement as HTMLElement;
  //   const button = element.querySelector('button')!;

  //   button.click();

  //   fixture.detectChanges();

  //   expect(element.textContent).toContain('こんにちは');
  // });

  it('should render "こんにちは" after toggle language button click', async () => {
    // コンポーネントをレンダリング
    await render(MessageComponent);

    // 画面上のボタンをクリック
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('こんにちは')).toBeDefined();
  });
});

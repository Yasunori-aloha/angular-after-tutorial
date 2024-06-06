import { render, screen } from '@testing-library/angular';
import { TitleInputComponent } from './title-input.component';

describe('TitleInputComponent', () => {
  it('should render application title', async () => {
    await render(TitleInputComponent, {
      componentProperties: { appName: 'My Application' },
    });

    expect(screen.getByRole('heading').textContent).toContain('My Application');
  });

  it('should render changed application title', async () => {
    // change関数を取り出す
    const { rerender } = await render(TitleInputComponent, {
      componentProperties: { appName: 'My Application' },
    });
    // プロパティの値を更新する
    await rerender({ componentProperties: { appName: 'My Application v2' } });

    expect(screen.getByRole('heading').textContent).toContain(
      'My Application v2'
    );
  });
});

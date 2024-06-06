import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render application title as <h1>', () => {
    // Arrange
    const element = fixture.nativeElement as HTMLElement;

    // Assert
    expect(element.querySelector('h1')?.textContent).toContain(
      'My Applciation'
    );
  });
});

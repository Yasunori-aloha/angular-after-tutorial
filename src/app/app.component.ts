import { Component, OnInit, inject } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { AppUsecase } from './app.usecase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [UserListComponent, CommonModule],
  providers: [AppUsecase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly usecase = inject(AppUsecase);

  readonly state$ = this.usecase.state$;

  ngOnInit() {
    this.usecase.initialize();
  }
}

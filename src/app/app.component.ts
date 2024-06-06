import { Component, OnInit, inject } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { AppUsecase } from './app.usecase';

import { DataService } from './data.service';
import { ExplicitSubscribeComponent } from './explicit-subscribe/explicit-subscribe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    UserListComponent,
    ExplicitSubscribeComponent,
    AsyncPipeComponent,
    AsyncPipe,
  ],
  providers: [AppUsecase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly usecase = inject(AppUsecase);

  readonly state$ = this.usecase.state$;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.usecase.initialize();
  }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}

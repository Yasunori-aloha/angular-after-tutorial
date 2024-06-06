import { Component, OnInit, inject } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { AppUsecase } from './app.usecase';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { ExplicitSubscribeComponent } from './explicit-subscribe/explicit-subscribe.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [UserListComponent, ExplicitSubscribeComponent, CommonModule],
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

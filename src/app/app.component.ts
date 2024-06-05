import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  users: User[] = [];

  ngOnInit() {
    this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .subscribe((resp) => {
        this.users = resp.data;
      });
  }
}

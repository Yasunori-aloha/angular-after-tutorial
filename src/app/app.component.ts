import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

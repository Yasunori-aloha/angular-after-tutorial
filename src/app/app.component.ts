import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly userService = inject(UserService);

  users: User[] = [];

  ngOnInit() {
    this.userService.getUser().subscribe((users) => {
      this.users = users;
    });
  }
}

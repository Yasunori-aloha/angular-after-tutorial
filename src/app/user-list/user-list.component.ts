import { Component, Input } from '@angular/core';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';
import { User } from '../user';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [UserListItemComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  @Input() users!: User[];
}

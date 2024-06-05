import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-list-item',
  standalone: true,
  imports: [],
  templateUrl: './user-list-item.component.html',
})
export class UserListItemComponent {
  @Input() user!: User;
}

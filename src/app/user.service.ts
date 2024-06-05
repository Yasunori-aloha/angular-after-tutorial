import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  getUser(): Observable<User[]> {
    return this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .pipe(map((resp) => resp.data));
  }
}

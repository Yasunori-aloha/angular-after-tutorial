import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-async-pipe',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './async-pipe.component.html',
})
export class AsyncPipeComponent {
  value$: Observable<any>;

  constructor(private dataService: DataService) {
    this.value$ = this.dataService.valueChanges.pipe(
      map((value) => `Value: ${value}`)
    );
  }
}

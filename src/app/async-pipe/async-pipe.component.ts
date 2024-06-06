import { Component } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';

type State = {
  value: any;
};

@Component({
  selector: 'app-async-pipe',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './async-pipe.component.html',
})
export class AsyncPipeComponent {
  readonly state$: Observable<State>;

  constructor(private dataService: DataService) {
    this.state$ = combineLatest([dataService.valueChanges]).pipe(
      map(([value]) => ({ value }))
    );
  }
}

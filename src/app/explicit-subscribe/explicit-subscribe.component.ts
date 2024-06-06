import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-explicit-subscribe',
  standalone: true,
  templateUrl: './explicit-subscribe.component.html',
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  value: any;
  private onDestroy$ = new Subject();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        this.value = value;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next('');
  }
}

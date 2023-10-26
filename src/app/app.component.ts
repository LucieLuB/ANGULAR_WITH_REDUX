import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//import { decrement, increment } from './Counter/counter.actions';
import { AppState } from './app.reducer';
import * as actions from './Counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CounterApp with Redux';
  counter!: number;

  constructor(private store: Store<AppState>) {
    //this.counter = 20;
    //this.store.subscribe((state) => {
    //this.counter = state.counter;
    //});
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  increase(): void {
    //this.counter = this.counter + 1;
    this.store.dispatch(actions.increment());
  }

  decrease(): void {
    //this.counter = this.counter - 1;
    this.store.dispatch(actions.decrement());
  }
}

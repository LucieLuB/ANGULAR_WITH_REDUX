import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrls: ['./granddaughter.component.scss'],
})
export class GranddaughterComponent implements OnInit {
  //@Input() counter!: number;
  //@Output() changeCounter = new EventEmitter<number>();
  counter!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  reset(): void {
    //this.counter = 0;
    //this.changeCounter.emit(this.counter);
    this.store.dispatch(actions.reset());
  }
}

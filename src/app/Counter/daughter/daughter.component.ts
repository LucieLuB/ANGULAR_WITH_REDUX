import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss'],
})
export class DaughterComponent implements OnInit {
  //@Input() counter!: number;
  //@Output() changeCounter = new EventEmitter<number>();

  counter!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  duplicate(): void {
    //this.counter = this.counter * 2;
    //this.changeCounter.emit(this.counter);
    this.store.dispatch(actions.duplicate({ number: 2 }));
  }

  /*
  resetGrandDaughter(newCounter: number): void {
    //this.counter = newCounter;
    //this.changeCounter.emit(this.counter);
  }*/
}

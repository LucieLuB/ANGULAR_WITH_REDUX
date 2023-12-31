import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaughterComponent } from './Counter/daughter/daughter.component';
import { GranddaughterComponent } from './Counter/granddaughter/granddaughter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Counter/counter.reducer';

@NgModule({
  declarations: [AppComponent, DaughterComponent, GranddaughterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

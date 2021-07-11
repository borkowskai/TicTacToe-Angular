import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { MaterialModule } from './materialModule';
import { GameComponent } from './tic-tac-toe/game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  // @D why undefined needed, should go without initialization  in Angular
  private currentTurn: number | undefined;
  //TODO change to false
  public gameStarted = true;
  public gameWon = false;
  private positionsPlayer1: number[] = [];
  private positionsPlayer2: number[] = [];


  constructor() {
  }

  ngOnInit(): void {
    //  TODO initialize/clean the game
    this.currentTurn = 1;
  }


  // @D possible in Observable ? which form is better?
  async clickCurrentCell(gameCell: any): Promise<void> {
    let position = gameCell.currentTarget.getAttribute('position');
    // console.log( "position" + position.type);
    // console.log(position);

    if (gameCell.currentTarget.innerHTML == "") {
      this.currentTurn === 1 ? this.positionsPlayer1.push(position) : this.positionsPlayer2.push(position);
      this.currentTurn === 1 ? gameCell.currentTarget.innerHTML = "<p>x</p>" : gameCell.currentTarget.innerHTML = "<p>o</p>";
      console.log(this.positionsPlayer1);
      console.log(this.positionsPlayer2);

      //  @D how to get number in the list - currently string
      // this.positionsPlayer1.push(0)
      // this.positionsPlayer1.push(1)
      // let check = this.positionsPlayer1.includes(0,1);
      // console.log( "position" + typeof this.positionsPlayer1[0]);
      // console.log(position);


      // this.checkIfWinner(this.positionsPlayer1);
      this.checkIfGameOver();
      this.newTurn();
    }

  }

  private newTurn(): void {
    this.currentTurn === 1 ? this.currentTurn = 2 : this.currentTurn = 1;
    console.log("currentTurn" + this.currentTurn);
  }

  public startGame(): void {
    this.currentTurn = 1;
    this.gameStarted = true;
    window.location.reload();
  }

  private checkIfGameOver(): void {
    if (this.positionsPlayer1.length === 5 && this.positionsPlayer2.length === 4 && !this.gameWon) {
      alert("game over");

    }
  }

  private checkIfWinner(arrayOfPlayerFields: number[]): void {

    if (arrayOfPlayerFields) {
      console.log(arrayOfPlayerFields.includes(0));
      alert("you won");
    }
  }


}

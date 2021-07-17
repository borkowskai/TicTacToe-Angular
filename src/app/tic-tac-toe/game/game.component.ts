import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  // @D why undefined needed, should go without initialization  in Angular
  private currentTurn: number = 1;
  public gameStarted = false;
  public gameWon = false;
  private positionsPlayer1: number[] = [];
  private positionsPlayer2: number[] = [];


  constructor() {
  }

  ngOnInit(): void {
  }


  clickCurrentCell(gameCell: any, position : number): void {
    if (gameCell.currentTarget.innerHTML == "") {
      console.log("currentTurn" + this.currentTurn);
      this.currentTurn === 1 ? this.positionsPlayer1.push(position) : this.positionsPlayer2.push(position);
      this.currentTurn === 1 ? gameCell.currentTarget.innerHTML = "<p>x</p>" : gameCell.currentTarget.innerHTML = "<p>o</p>";
      this.checkIfWinner(this.currentTurn === 1 ? this.positionsPlayer1 : this.positionsPlayer2);
      this.checkIfGameOver();
      this.newTurn();
    }

  }

  private newTurn(): void {
    this.currentTurn === 1 ? this.currentTurn = 2 : this.currentTurn = 1;
  }

  public startGame(): void {
    this.gameStarted = true;
  }

  private checkIfGameOver(): void {
    if (this.positionsPlayer1.length === 5 && this.positionsPlayer2.length === 4 && !this.gameWon) {
      alert("game over");

      window.location.reload();
    }
  }


  private checkIfWinner(array: number[]): void {
    if(array.length >= 2){
      if (
        this.isInArray(array, 0,1,2 ) ||
        this.isInArray(array, 3,4,5 ) ||
        this.isInArray(array, 6,7,8 ) ||
        this.isInArray(array, 0,3,6 ) ||
        this.isInArray(array, 1,4,7 ) ||
        this.isInArray(array, 2,5,8 ) ||
        this.isInArray(array, 0,4,8 ) ||
        this.isInArray(array, 2,4,6 ) ){
        alert("you won");
        this.gameWon = true;
        window.location.reload();
      }
    }
  }

  private isInArray( arrayOfPlayerFields: number[], firstNumber: number, secondNumber: number, thirdNumber : number): boolean{
    if(arrayOfPlayerFields.includes(firstNumber) && arrayOfPlayerFields.includes(secondNumber) && arrayOfPlayerFields.includes(thirdNumber)){
      return true;
    }
    else{
      return false;
    }

  }


}

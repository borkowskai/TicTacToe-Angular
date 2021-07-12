import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  // @D why undefined needed, should go without initialization  in Angular
  private currentTurn : number | undefined;

  constructor() { }

  ngOnInit(): void {
  //  TODO initialize/clean the game
    this.currentTurn = 1;
  }

  // @D possible in Observable ? which form is better
  async clickCurrentCell(gameCell : any ): Promise<void>{
    let position = gameCell.currentTarget.getAttribute('position');
    console.log(position);

    if(gameCell.currentTarget.innerHTML == ""){
      this.currentTurn === 1 ? gameCell.currentTarget.innerHTML= "<p>x</p>": gameCell.currentTarget.innerHTML= "<p>o</p>";
    }
    this.newTurn();
  }

  private newTurn() : void{
    this.currentTurn === 1 ? this.currentTurn = 2 : this.currentTurn = 1;
    console.log("currentTurn" + this.currentTurn);
  }


}

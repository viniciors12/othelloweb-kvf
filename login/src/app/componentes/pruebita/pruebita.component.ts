import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import {GameService } from '../../servicios/game.service';


@Component({
  selector: 'app-pruebita',
  templateUrl: './pruebita.component.html',
  styleUrls: ['./pruebita.component.scss']
})
export class PruebitaComponent implements OnInit {
  
  game: Game = new Game();

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(){
    this.gameService.getProducts();
  }

  onSubmitGame()
  {
      
      this.game.$code =123;
      this.game.player1 ='Juan';
      this.game.player2 = 'Carlos';
      this.game.pts1 = 12;
      this.game.pts2 = 11;
      console.log(this.game);
      this.gameService.insertGame(this.game);
      
      
  }
}

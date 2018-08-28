import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.gameList = this.firebase.list('games');
  }

  insertGame(game: Game){
    console.log(game);
    console.log(this.gameList);
    this.gameList.push({
      player1: game.player1,
      player2: game.player2,
      pts1: game.pts1,
      pts2: game.pts2
    })
  }
}

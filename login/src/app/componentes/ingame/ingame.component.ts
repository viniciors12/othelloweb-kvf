import { Component, OnInit } from '@angular/core';
import { IngameService } from '../../servicios/ingame.service';

@Component({
  selector: 'ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss'],
  providers: [IngameService]
})
export class IngameComponent implements OnInit {
  public juego : {};
  public matriz: number[][];
  public j1_color: string;
  public j2_color: string;
  public jugador: string;


  constructor(
    private _ingameService: IngameService
  ) { 
    this.matriz = [[0,0,0,0],
                   [0,2,1,0],
                   [0,1,2,0],
                   [0,0,0,0]];
                   this.j1_color = 'black';
                   this.j2_color = 'white';

  }
  ngOnInit() {
    this._ingameService.getJuego().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}

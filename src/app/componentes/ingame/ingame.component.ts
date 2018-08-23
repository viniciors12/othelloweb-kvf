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

  constructor(
    private _ingameService: IngameService
  ) { }
  ngOnInit() {
    this._ingameService.getJuego().subscribe(
      result => {
        console.log(result);
      },
      error => {
        alert(<any>error);
      }
    )
  }

}

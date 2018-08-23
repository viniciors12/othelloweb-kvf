import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.scss']
})
export class IngameComponent implements OnInit {
  public matriz: number[][];
  public j1_color: string;
  public j2_color: string;
  public jugador: number;

  constructor() {
    this.matriz =[[0,0,0,0,0,0],
                  [0,0,0,0,0,0],
                  [0,0,1,2,0,0],
                  [0,0,2,1,0,0],
                  [0,0,0,0,0,0],
                  [0,0,0,0,0,0]];
    this.jugador = 1;
                }

  ngOnInit() {
  }

}

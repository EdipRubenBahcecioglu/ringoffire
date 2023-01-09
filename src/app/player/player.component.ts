import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  
  @Input() name;
  @Input () playerActive = false; // standardgemäß ist die boolean Variable immer false, da ein Spieler nicht aktiv ist
  @Input() image = 'player.png';

  constructor() {}

  ngOnInit(): void{

  }
}

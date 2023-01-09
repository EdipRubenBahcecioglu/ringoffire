import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})
export class PlayerMobileComponent implements OnInit {

  @Input() name;
  @Input () playerActive = false; // standardgemäß ist die boolean Variable immer false, da ein Spieler nicht aktiv ist
  @Input() image = 'player.png'

  constructor() {}

  ngOnInit(): void {
    
  }

}

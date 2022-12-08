import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = ''; // currentCard ist ein Stringtyp und von default aus ein leerer String
  game: Game;

  constructor() {
  }

  ngOnInit(): void { // Alles innerhalb der ngOnInit wird sofort aufgerufen sobald wir in der game Componente sind bzw. wenn der game selector aufgerufen wird
    this.newGame();
  }

  newGame() {
    this.game = new Game(); // die Variable game bekommt das komplette Objeckt Game aus modules/game.ts zugeordnet
  }

  takeCard() {
    if(!this.pickCardAnimation){ // Alle 1,5 Sekunden können wir eine neue Karte ziehen, da im Timeout die bolean Variable erst wieder auf false gesetzt wird
      this.currentCard = this.game.stack.pop()!; // wir verweisen der Variable currentCard eine bestimmte Karte aus dem stack (Kartendeck) array // Mit .pop greifen wir immer auf den letzten Wert eines Arrays zu und splicen diesen auch direkt
      this.pickCardAnimation = true;
  
      setTimeout(()=>{
        this.game.playedCards.push(this.currentCard); // Alle Karten die wir bereits gezogen haben, werden in das Array playedCards gepusht
        this.pickCardAnimation = false;
      }, 1250);
    }
  }
}

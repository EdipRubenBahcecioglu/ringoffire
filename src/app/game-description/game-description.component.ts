import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Turned upside down', description: 'Swap your shuffle with the player who still has the most to drink. ' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'All against one', description: 'Decide as a troop who needs to drink next.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title = '';
  description = '';
  @Input() card;

  ngOnInit(): void { // OnInit wird nur einmal beim öffnen der selectors geladen // Typ :void bedeutet das die Funktion nur was ausführt und nichts zurückgibt (return)
  }

  ngOnChanges(): void { // OnChanges wird immer wieder neu geladen, sobald sich die Inputvariable ändert
    if (this.card) {
      console.log('Aktuelle Karte ist', this.card);
      let cardNumber = +this.card.split('_')[1];
      // Mit .split haben wir die Möglichkeit nach einem bestimmten Zeichen hier _ einen String zu splitten. Die gesplitteten Sachen werden dann zu einem Array gemacht, hier einmal Kartentyp z.B. Herz und die Zahl z.B. 8
      // Mit dem + vor dem this.card.split... können wir den String in eine Number umwandeln
      this.title = this.cardAction[cardNumber - 1].title; // Da unser Array immer bei 0 beginnt und die Kartenzahlen bei 1, ziehen wir standardgemäß eine Nummer ab, damit auch der 0 Wert vom Array gelesen werden kann
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}

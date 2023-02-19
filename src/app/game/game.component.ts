import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Wir importieren von Material Design den Dialog
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game;
  gameId;
  gameOver = false;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) {
    // Unser Dialog von Material Design soll von übreall zugägnglich sein
    // Unsers aktuelle Route also Link soll von überall zugänglich sein 
  }

  ngOnInit(): void { // Alles innerhalb der ngOnInit wird sofort aufgerufen sobald wir in der game Componente sind bzw. wenn der game selector aufgerufen wird
    this.newGame();
    this.route.params.subscribe((params) => { // Wir abonieren unserse aktuelle Route 
      console.log(params['id']);
      this.gameId = params['id'];

      this.firestore // wir wollen auf eine Datenbank zugreifen
        .collection('games') // wir wollen auf die Datenbank zugreifen mit dem Sammlungsnamen games
        .doc(this.gameId) // wir wollen auf ein bestimmtes Dokument aus der Sammlung games zugreifen
        .valueChanges() // hiermit können wir auf Änderungen zugreifen 
        .subscribe((game: any) => { // sobald sich was in der Datenbanksammlung games ändert, wird alles innhalb der subscribefunktion ausgeführt
          console.log('New Game', game);
          this.game.currentPlayer = game.currentPlayer; // Wir aktuallisieren das leere gameObjekt mit den Daten aus der Datenbank
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.player_images = game.player_images;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
        });
    })
  }

  newGame() {
    this.game = new Game(); // die Variable game bekommt das komplette Objeckt Game aus modules/game.ts zugeordnet
  }

  takeCard() {
    if(this.game.stack.length == 0){
      this.gameOver = true;
    } else if (!this.game.pickCardAnimation && this.game.players.length >= 2) { // Alle 1,5 Sekunden können wir eine neue Karte ziehen, da im Timeout die bolean Variable erst wieder auf false gesetzt wird
      this.game.currentCard = this.game.stack.pop()!; // wir verweisen der Variable currentCard eine bestimmte Karte aus dem stack (Kartendeck) array // Mit .pop greifen wir immer auf den letzten Wert eines Arrays zu und splicen diesen auch direkt
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;

      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      // Mit Modulu Operator verhindern wir, dass der currentPlayer mit ++ länger als der eingendliche Spieler Array hochgeht. Wenn das Ende vom SpielerArray erreicht ist, fangen wir wieder von vorne an
      this.saveGame(); // wir speichern den aktuellen Spielstand

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard); // Alle Karten die wir bereits gezogen haben, werden in das Array playedCards gepusht
        this.game.pickCardAnimation = false;
        this.saveGame(); // wir speichern den aktuellen Spielstand
      }, 1250);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent); // Der Dialog add player selector soll geöffnet werden

    dialogRef.afterClosed().subscribe(name => { // Die Variable Name ist der Name der beim Inputfeld AddPlayer eingetragen wird
      if (name && name.length > 0) {
        // Im ersten Schritt prüfen wir ob die Variable existiert und im zweiten Scrhitt prüfen wir die Länge der Variable
        this.game.players.push(name);
        this.game.player_images.push('player.png') // Standardbild was im anschluss geändert werden kann
        this.saveGame(); // wir speichern den aktuellen Spielstand
      }
    });
  }

  saveGame() { // Mithilfe dieser Funktion speichern wir bzw. aktuallisieren wir den aktuellen Spielstand in der Datenbank und nicht nur lokal auf dem Rechner 
    this.firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }

  changeAvatar(playerIndex) {
    console.log('Player is', playerIndex);

    const dialogRef = this.dialog.open(EditPlayerComponent); // Der Dialog edit Player selector / Component soll geöffnet werden
    dialogRef.afterClosed().subscribe((change) =>{
      console.log('Received change', change);
      
      if(change){ // wenn ein change / neues Bild ausgewählt wurde dann soll die Datenbank geupdatet werden, ansonsten nicht wenn der User z.B. kein Bild auswählt
        if(change == 'DELETE'){
          this.game.players.splice(playerIndex, 1);
          this.game.player_images.splice(playerIndex, 1);
        } else {
          this.game.player_images[playerIndex] = change; // an der Stelle vom PlayerIndex wird das Ausgewählte Bild ersetzt 
        }
      }
      this.saveGame();
    });
  }
}

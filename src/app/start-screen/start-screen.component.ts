import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { RouterModule, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { } // wir importieren bzw. implementieren hier firebase damit wir das auch hier nutzen können

  ngOnInit(): void{

  }

  newGame(){
    let game = new Game(); // es wird ein neues Spiel erstellt 
    this.firestore
    .collection('games') // wir greifen auf die Datenbanksammlung games zu 
    .add(game.toJson()) // wir fügen mit dem Befehl add ein neues JSON hinzu. Da wir kein Objekt in die Datenbank hinzufügen können wie z.B. unser Gameobjekt, müssen wir dies vorher in ein Json umwandeln
    .then((gameInfo : any) =>{ // then ist wie subscribe nur kann then nur einmal aufgerufen werden und subscrib öfter // die selbstgegebene Variable gameInfo spuckt unst alle Informationen zum Datentyp game aus
      this.router.navigateByUrl('/game/' + gameInfo.id); // Wenn wir auf den Button clicken wird unserem Link ein /game hinzugefügt + die jeweilige Game Id die erstellt wurde
    });
  }
}

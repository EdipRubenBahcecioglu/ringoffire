import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; // Wir importieren von Material Desing Icons Module
import { MatButtonModule } from '@angular/material/button';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component' // Wir imprtieren von Material Design Button Module
import {MatDialogModule} from '@angular/material/dialog'; // wir importieren von Material Design den Dialog
import {MatInputModule} from '@angular/material/input'; // Wir importieren von Material Design den Input
import {FormsModule} from '@angular/forms';
import { GameDescriptionComponent } from './game-description/game-description.component'; // wir importieren von Material Design das Carddesign
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Da wir eine form in Material Design verwenden müssen wir dieses auch importieren
    MatButtonModule, // Wir imprtieren von Material Design Button Module
    MatIconModule, // Wir imprtieren von Material Design Icon Module
    MatInputModule, //Wir imprtieren von Material Design Input Module
    MatDialogModule, // Wir imprtieren von Material Design Dialog Module
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  {path: '', component: StartScreenComponent}, // StartScreen Operator wird angezeigt wenn nach dem Backslash vom Link nichts steht z.B. ringoffire.de/
  {path: 'game/:id', component: GameComponent} // Mit /:id legen wir eine Variable fest d.h. man kann hier auf ein bestimmtes Spiel mit der ID XY aus der Datenbank zugreifen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

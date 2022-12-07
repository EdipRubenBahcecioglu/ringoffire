import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void{

  }

  newGame(){
    this.router.navigateByUrl('/game'); // Wenn wir auf den Button clicken wird unserem Link ein /game hinzugefügt und wir werden demenstrechend auf den Game Selector weitergeleitet
  }
}

import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  allProfilePictures = ['player.png', 'playerin.png', 'cat.svg', 'dog.svg', 'female.svg', 'male.svg']; // Alle verfügbaren Profilbilder

}

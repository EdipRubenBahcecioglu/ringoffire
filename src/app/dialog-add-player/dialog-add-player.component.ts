import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayerComponent> // Dieser Code wurde nur aus Material Design kopiert
  ) {}

  ngOnInit(): void {
    
  }

  onNoClick(){
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ToDoService } from './shared/to-do.service';
import { ToDoDialogComponent } from './to-do-dialog/to-do-dialog.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openModal(): void {
    let dialogRef = this.dialog.open(ToDoDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }
}

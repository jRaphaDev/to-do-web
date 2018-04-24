import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-to-do-dialog',
  templateUrl: './to-do-dialog.component.html',
  styleUrls: ['./to-do-dialog.component.css']
})
export class ToDoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ToDoDialogComponent>
  ) { }

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }

}

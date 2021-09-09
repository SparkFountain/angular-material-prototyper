import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-prototype-dialog',
  templateUrl: './create-prototype-dialog.component.html',
  styleUrls: ['./create-prototype-dialog.component.scss'],
})
export class CreatePrototypeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreatePrototypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

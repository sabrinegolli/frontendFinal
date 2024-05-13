import { Component, Inject } from '@angular/core';
import {OnInit} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent  {



  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  onConfirm(): void {
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}



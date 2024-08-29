import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'add-task-dialog',
    templateUrl: './add-task.html',
    standalone:true,
    imports:[ReactiveFormsModule, CommonModule, FormsModule,  MatFormFieldModule, MatDialogModule, MatOptionModule]
  })
  export class AddTaskDialog {
    constructor(
      public dialogRef: MatDialogRef<AddTaskDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
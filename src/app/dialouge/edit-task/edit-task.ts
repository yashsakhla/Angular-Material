import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'edit-task-dialog',
    templateUrl: 'edit-task.html',
    standalone:true,
    imports:[CommonModule,ReactiveFormsModule, FormsModule,  MatFormFieldModule, MatDialogModule, MatOptionModule]
  })
  export class EditTaskDialog {
    constructor(
      public dialogRef: MatDialogRef<EditTaskDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
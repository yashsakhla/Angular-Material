import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'edit-employee-dialog',
    templateUrl: './edit.component.html',
    standalone:true,
    imports:[ReactiveFormsModule, FormsModule, CommonModule, MatFormFieldModule, MatDialogModule]
  })
  export class EditEmployeeDialog {
    constructor(
      public dialogRef: MatDialogRef<EditEmployeeDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
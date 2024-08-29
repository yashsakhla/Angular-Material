import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
    selector: 'add-employee-dialog',
    templateUrl: './add.component.html',
    standalone:true,
    imports:[ReactiveFormsModule, CommonModule, FormsModule, MatFormFieldModule, MatDialogModule, MatInput, MatButton]
  })
  export class AddEmployeeDialog {
    constructor(
      public dialogRef: MatDialogRef<AddEmployeeDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Optional if you add icons
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EditTaskDialog } from './dialouge/edit-task/edit-task';
import { AddTaskDialog } from './dialouge/add-task/add.task';
import { AddEmployeeDialog } from './dialouge/add/add.component';
import { EditEmployeeDialog } from './dialouge/edit/edit.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
MatListModule,
ReactiveFormsModule,
MatFormFieldModule,
FormsModule,
MatDialogModule,
MatOptionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ="ng-basic";
  displayedColumns: string[] = ['id', 'name', 'tasks'];
  nestedColumns: string[] = ['taskId', 'taskDesc', 'taskStatus'];
  dataSource = ELEMENT_DATA;
  newEmployee = { id: '', name: '' };
  newTask = { taskId: '', taskDesc: '', taskStatus: '' };
  selectedEmployee: any;
  selectedTask: any;
  isSidenavOpened = true;
  public dialogRef!: MatDialogRef<AddEmployeeDialog>
  constructor(public dialog: MatDialog) {
    
  }

  logout() {
    // Handle logout logic here
    console.log('Logout clicked');
  }

  openAddEmployeeDialog() {
    const dialogRef = this.dialog.open(AddEmployeeDialog, {
      width: '250px',
      data: { newEmployee: this.newEmployee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
        this.dataSource = [...this.dataSource]; // Refresh the dataSource
      }
    });
  }
  getStatusIconClass(status: string): string {
    switch (status) {
      case 'ongoing':
        return 'status-icon-ongoing';
      case 'pending':
        return 'status-icon-pending';
      case 'completed':
        return 'status-icon-completed';
      default:
        return '';
    }
  }
  
  openEditEmployeeDialog(employee: any) {
    this.selectedEmployee = { ...employee };
    const dialogRef = this.dialog.open(EditEmployeeDialog, {
      width: '250px',
      data: this.selectedEmployee
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(e => e.id === result.id);
        this.dataSource[index] = result;
        this.dataSource = [...this.dataSource]; // Refresh the dataSource
      }
    });
  }

  openAddTaskDialog(employee: any) {
    this.newTask = { taskId: '', taskDesc: '', taskStatus: '' };
    const dialogRef = this.dialog.open(AddTaskDialog, {
      width: '300px',
      data: { employee, newTask: this.newTask }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        employee.tasks.push(result);
        this.dataSource = [...this.dataSource]; // Refresh the dataSource
      }
    });
  }

  openEditTaskDialog(task: any) {
    this.selectedTask = { ...task };
    const dialogRef = this.dialog.open(EditTaskDialog, {
      width: '300px',
      data: this.selectedTask
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const employee = this.dataSource.find(e => e.tasks.includes(task));
        if (employee) {
          const taskIndex = employee.tasks.findIndex(t => t.taskId === result.taskId);
          employee.tasks[taskIndex] = result;
          this.dataSource = [...this.dataSource]; // Refresh the dataSource
        }
      }
    });
  }

  removeTask(task: any) {
    const employee = this.dataSource.find(e => e.tasks.includes(task));
    if (employee) {
      employee.tasks = employee.tasks.filter(t => t.taskId !== task.taskId);
      this.dataSource = [...this.dataSource]; // Refresh the dataSource
    }
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  editTask(){

  }

  addTask(){

  }

  editEmployee(){

  }

  addEmployee(){

  }
}

const ELEMENT_DATA = [
  {
    id: 'E001',
    name: 'John Doe',
    tasks: [
      { taskId: 'T001', taskDesc: 'Complete Project Report', taskStatus: 'completed' },
      { taskId: 'T002', taskDesc: 'Review Project Proposal', taskStatus: 'ongoing' }
    ]
  },
  {
    id: 'E002',
    name: 'Jane Smith',
    tasks: [
      { taskId: 'T003', taskDesc: 'Design New Marketing Material', taskStatus: 'pending' },
      { taskId: 'T004', taskDesc: 'Prepare Presentation Slides', taskStatus: 'ongoing' }
    ]
  },
  {
    id: 'E003',
    name: 'Michael Johnson',
    tasks: [
      { taskId: 'T005', taskDesc: 'Update Website Content', taskStatus: 'completed' },
      { taskId: 'T006', taskDesc: 'Fix Broken Links', taskStatus: 'pending' }
    ]
  },
  {
    id: 'E004',
    name: 'Emily Davis',
    tasks: [
      { taskId: 'T007', taskDesc: 'Prepare Financial Report', taskStatus: 'ongoing' },
      { taskId: 'T008', taskDesc: 'Audit Budget', taskStatus: 'completed' }
    ]
  }
];
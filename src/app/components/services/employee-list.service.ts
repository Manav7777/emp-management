import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor() { }

  gridColumnDefine(){
    return [
      {
        headerName: 'Sr No',
        field: 'index',
        valueGetter: 'node.rowIndex + 1',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        lockPosition: true,
        resizable: false,
        sortable: false
      },
      {
        headerName: 'Employee Name', field: 'employee_name', sortable: true, minWidth: 200, width: 200,
        cellClass: 'tooltip-cell sync-cell'
      },
      {
        headerName: 'Salary', field: 'employee_salary', sortable: true, minWidth: 100, width: 130,
        cellClass: 'tooltip-cell'
      },
      {
        headerName: 'Age', field: 'employee_age', sortable: false, minWidth: 100, width: 100,
        cellClass: 'tooltip-cell'
      },
      {
        headerName: 'Action', field: 'action', sortable: false, minWidth: 200, width: 200,
        cellClass: 'tooltip-cell', cellRenderer: params => {
          const editButton = `<button class="btn btn-primary" (click)="edit(${params.data.id})">Edit</button>`;
          const deleteButton = `<button class="btn btn-danger" (click)="delete(${params.data.id})">Delete</button>`;
          return `${editButton} ${deleteButton}`;
        },
      }
    ];
  }
}

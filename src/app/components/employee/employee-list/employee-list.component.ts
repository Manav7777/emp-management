import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeListService } from '../../services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  columnDefs: any;
  rowData: any;
  defaultColDef = {
    sortable: true,
  };

  gridOptions = {
    pagination: true,
    paginationPageSize: 10
  };

  constructor(
    private empService: EmployeeService,
    private empListService: EmployeeListService
  ) {}

  ngOnInit(): void {
    this.columnDefs = this.empListService.gridColumnDefine();
    this.empService.getEmployees().subscribe((emp) => {
      this.rowData = emp
    });

  }
}

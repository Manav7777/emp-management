import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'emp-grid',
  templateUrl: './emp-grid.component.html',
  styleUrls: ['./emp-grid.component.scss']
})
export class EmpGridComponent implements OnInit {
  @Input() rowData:any;
  // @Input() gridOptions:any
  @Input() columnDefs:any

  constructor() { }

  ngOnInit(): void {
    console.log('columnDefs',this.rowData)
  }

}

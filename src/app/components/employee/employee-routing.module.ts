import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { GlobalConstants } from 'src/app/global-constants';

const routes: Routes = [
  // { path: '', component: EmployeeCrudComponent, children:[
  //   { path: 'employees/new', component: EmployeeCrudComponent }
  // ]},  

  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        data: {path : GlobalConstants.listRoute}
      },
      {
        path: GlobalConstants.newEmployee,
        component: EmployeeCrudComponent,
      },
      {
        path: GlobalConstants.editEmployee,
        component: EmployeeCrudComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalConstants } from './global-constants';

const routes: Routes = [
  {
    path: GlobalConstants.listRoute,
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  { path: '', redirectTo: GlobalConstants.listRoute, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

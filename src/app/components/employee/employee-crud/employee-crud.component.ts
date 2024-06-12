import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.scss'],
})
export class EmployeeCrudComponent implements OnInit {
  employeeForm: FormGroup;
  isEditForm = false;
  employeeId: string

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditForm = true;
        this.employeeId = params['id'];
        this.empService.getEmployee(this.employeeId).subscribe((emp) => {
          this.employeeForm.patchValue({
            name: emp.employee_name,
            salary: emp.employee_salary,
            age: emp.employee_age
          });
        })
      }
    })
  }

  async onSubmit() {
    if (this.employeeForm.valid) {
      const employee = {
        employee_name: this.employeeForm.value.name,
        employee_salary: this.employeeForm.value.salary,
        employee_age: this.employeeForm.value.age,
      };
      if (this.isEditForm) {
        await this.empService.updateEmployee(this.employeeId, employee).subscribe(() => {
          this.toast.success('Employee updated successfully!');
          this.router.navigate(['/']);
          this.employeeForm.reset();
        }, error => {
          console.error('Error updating employee:', error);
          this.toast.error('Failed to update employee.');
        });
      } else {
        await this.empService.createEmployee(employee).subscribe(() => {
          this.toast.success('Employee created successfully!');
          // this.router.navigate(['/employees']);
          this.employeeForm.reset();
        }, error => {
          console.error('Error updating employee:', error);
          this.toast.error('Failed to create employee.');
        });
      }
    }
  }
}

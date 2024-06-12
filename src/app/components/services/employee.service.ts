import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global-constants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(GlobalConstants.API_URL);
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(`${GlobalConstants.API_URL}/${id}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(GlobalConstants.API_URL, employee);
  }

  updateEmployee(id, employee): Observable<any> {
    return this.http.put(`${GlobalConstants.API_URL}/${id}`, employee);
  }
}

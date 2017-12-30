import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Server} from './../utilities/Server';
import { Employee } from './../models/employee';
import { EmployeeRole } from './../models/employeeRole';

@Injectable()
export class EmployeeService {
    private baseURL: String;
    private _addEmployeeURL = 'employees/addEmployee';
    private getEmployeeRolesURL = 'app/employees/EmployeeRole.js';
    
    constructor(private _http: Http) { 
        var server = new Server();
        this.baseURL = server.getServerURL();
    }


    public addEmployee(employee: Employee): Observable<Employee> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addEmployeeURL, employee, options)
            .map(this.extractData);
    }

    public getEmployeeRoles(): EmployeeRole[] {
        var employeeRoles=[];
     var employeeRole = new EmployeeRole();
     employeeRole.Name = "Master";
     employeeRole.RoleID = 1; 
     employeeRoles.push(employeeRole);
     employeeRole = new EmployeeRole(); 
     employeeRole.Name = "Shoe Maker";
     employeeRole.RoleID = 2; 
     employeeRoles.push(employeeRole);
     employeeRole = new EmployeeRole(); 
     employeeRole.Name = "Sticher";
     employeeRole.RoleID = 3; 
     employeeRoles.push(employeeRole);
     employeeRole = new EmployeeRole(); 
     employeeRole.Name = "Embroidery worker";
     employeeRole.RoleID = 4; 
     employeeRoles.push(employeeRole);
     return employeeRoles;
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    }

}
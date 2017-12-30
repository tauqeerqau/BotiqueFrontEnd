import { Component } from '@angular/core';
import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.Service'

@Component({
    selector: 'employee-form',
    templateUrl: './employee.template.html',
    styleUrls:['./employee.style.css'],
    providers:[EmployeeService]
})

export class EmployeeFormComponent {
    public newEmployee;
    public employeeRoles;
    constructor(private _emplloyeeService: EmployeeService) { 

    }


    addEmployee(): void {
        console.log("Add Employee is Cliecked TS");
        console.log(this.newEmployee);
        this._emplloyeeService.addEmployee(this.newEmployee).subscribe(res => {
            console.log(res);
        });
    }

    onChange(_id:string):void
    {
        console.log("CHange is Clicked"+_id);
        this.newEmployee.EmployeeRole=_id;
    }

    ngOnInit(): void {
        this.newEmployee = new Employee();
        console.log("NG ON INIT IS CALLED");
        this.employeeRoles = this._emplloyeeService.getEmployeeRoles();
      }

}
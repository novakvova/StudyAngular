﻿import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    //styles: ['table { color: blue; } ']
})
export class EmployeeComponent {
    colSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}
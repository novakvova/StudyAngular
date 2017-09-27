import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'list-employee',
    templateUrl: 'employeeList.component.html',
    styleUrls: ['employeeList.component.css']
})


export class EmployeeListComponent {
    employees: any[] = [
        //{ code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
        //{ code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500.899, dateOfBirth: '9/6/2000' },
        //{ code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '23/12/2009' },
        //{ code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6550.890, dateOfBirth: '14/10/2003' },
    ];
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500.899, dateOfBirth: '9/6/2000' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '23/12/2009' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6550.890, dateOfBirth: '14/10/2003' },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500.899, dateOfBirth: '9/6/2000' },
            //{ code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '23/12/2009' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6550.890, dateOfBirth: '14/10/2003' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6850.890, dateOfBirth: '18/10/2003' },
        ];
        this.employees.push({
            code: 'emp106', name: 'Nancy', gender: 'Female', annualSalary: 6850.890, dateOfBirth: '18/10/2003'
        });
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list-employee',
        templateUrl: 'employeeList.component.html',
        styleUrls: ['employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=EmployeeList.component.js.map
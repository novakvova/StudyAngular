import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    imagePath: string = '/images/dog.jpg';
    firstName: string = 'Peter';
    lastName: string = 'Pen';
    isDisabled: boolean = true;
    badHtml: string =
    '<b>Hello</b> <script>alert("Hacked");</script>';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

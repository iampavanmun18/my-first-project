import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userDetail = [
    {
      name: 'Pavan',
      email: 'pavan@gmail.com',
      age: 25,
    },
    { name: 'Yash', email: 'Yash@gmail.com', age: 16 },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hey Angularrrrrrrrrrrrrr!';
  users = ['Pavan', 'Yash', 'Ankit', 'Ganesh', 'Digi'];

  userDetail = [
    {
      name: 'Pavan',
      email: 'pavan@gmail.com',
      phone: 9730515919,
      company: 'cloverinfotech',
    },
    {
      name: 'Yash',
      email: 'Yash@gmail.com',
      phone: 99293274923,
      company: 'Atos',
    },
    {
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: 79793274923,
      company: 'Accenture',
    },
    {
      name: 'Digi',
      email: 'Digi@gmail.com',
      phone: 987453475834,
      company: 'Tcs',
    },
  ];
}

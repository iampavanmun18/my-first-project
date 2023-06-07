import { UserDataService } from './services/user-data.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Services in Angular';
  users:any
  constructor(private userData: UserDataService){
    console.warn('userData', userData.users())
    this.users =userData.users();

  }
}

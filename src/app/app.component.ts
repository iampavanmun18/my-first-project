import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '16';
  getName(name: any){
    return  alert(name)
  }

  getData(value: any){
    return console.log('Hey I am the event!!', value)
  }
}

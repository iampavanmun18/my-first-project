import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= "template variable ref"
  getValue(item:HTMLInputElement){
    console.warn('*************', item)
  }

}

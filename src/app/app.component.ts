import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= "send data from child to Parent"
  data_C_P = 'x'

  // this is Parent component
  updateData(item:string){
    console.warn('*****', item)
    this.data_C_P = item
  }
}

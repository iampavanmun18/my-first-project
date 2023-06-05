import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '16';
  displayVal ="";
  displayValforInput ="";
  count = 0;
  getName(name: any){
    return  alert(name)
  }

  getData(value: any){
     console.log('Hey I am the event!!', value)
  }

  getValue(val:string){
      this.displayVal = val;
     console.warn('This is input element value displayed on screen', val)
  }

  getValueforInput(val:string){
   this.displayValforInput =val
   console.warn('This is input element value displayed on screen', val)
}

counter(type:string){
  type === 'add' ? this.count++ : this.count--
}


}

import { Component } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= "Template driven forms in angular";
  loginform  = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })
  userLogin(){
    console.warn(this.loginform.value)
  }

}

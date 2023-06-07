import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'Anil', age: 28, email:'pavan@gmail.com'},
      {name:'Yash', age: 25, email:'yash@gmail.com'},
      {name:'Pavan', age: 31, email:'ankit@gmail.com'}
    ]
  }
}

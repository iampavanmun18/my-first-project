import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(){}

  //output & EventEmitter are decorator
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

}

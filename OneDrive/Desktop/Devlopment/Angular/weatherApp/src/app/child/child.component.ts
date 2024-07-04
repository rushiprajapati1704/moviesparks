import { Component,EventEmitter,Input, Output } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  template:`
  <h1>{{name}}</h1>
  `
})
export class ChildComponent {
  constructor(public _get:EmpService){}
  @Input('Item') public name="";
  @Output() childEvent=new EventEmitter();
}

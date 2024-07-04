import { Component } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <h1>{{name | json}}</h1>
  <p>{{ 101010010 | number:'0.2-2' }}</p>
  <p>{{1000000|currency:"INR":'code'}}</p>
  <p>{{date|date:'short'}}</p>

  <ul *ngFor="let x of emp.data">
  <img src="{{x.productImageUrl}}">
    <li>{{x.categoryName + " "+ x.productPrice+" "+x.productName}}</li>
  </ul>
  `
})
export class AppComponent {
  constructor(public empSer:EmpService){}
  name:string = "rushi";
  message=""
  date=Date();
  emp:any;
  ngOnInit(){
    this.empSer.getEmp().subscribe((data)=>{this.emp=data; console.warn(data)})
  }
}
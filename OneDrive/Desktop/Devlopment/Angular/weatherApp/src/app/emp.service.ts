import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(public http:HttpClient) { }
  getData(){
    return [
      {name:"Rushi",email:"rushi@gmail.com"},
      {name:"sjdks",email:"dnsk@gmail.com"},
      {name:"dksnd",email:"dnjsd@gmail.com"},
      {name:"kfdm",email:"sjdbs@gmail.com"},
      {name:"fjueih",email:"sjdhb@gmail.com"},
    ]
  }
  getEmp(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts');
  }
}

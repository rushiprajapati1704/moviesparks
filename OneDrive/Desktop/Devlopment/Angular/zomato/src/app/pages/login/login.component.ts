import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // loginObj={
  //   "username": "string",
  //   "password": "string"
  // }
  // constructor(private mastersrv:MasterService,private router:Router){}
  // onLogin(){
    // this.mastersrv.Login(this.loginObj).subscribe((res:any)=>{
        
    // })
  // }
}

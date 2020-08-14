import { Component, OnInit } from '@angular/core';
import {LoginModel} from './login.model';
import {PropertyService} from '../property.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:PropertyService, private router:Router, private fb:FormBuilder) { }
  loginitem=new LoginModel('null','null');



  regForm=this.fb.group({
 
    username:['',[Validators.required,Validators.minLength(4),Validators.email]],
password:['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,13})')]]

})


get username(){

  return this.regForm.get('username');
 
  }
 
 
   get password(){
 
 return this.regForm.get('password');
 
   }
 
 ngOnInit(): void {
 
 }
  AddLogin(){
    this.loginservice.newLogin().subscribe(data=>{console.log(data)});


  

  }

}

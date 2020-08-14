import { Component, OnInit } from '@angular/core';

import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

import{RegisterModel} from './register.model';
import{RegService}from '../reg.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterItem=new RegisterModel('null','null','null','null','null');
 
  // regForm = new FormGroup({

  //   username:new FormControl('',Validators.required),
  //    password:new FormControl(''),
  //     firstname:new FormControl(''),
  //     lastname:new FormControl(''),
  //     contactno:new FormControl('')
   

  // })

  // AddUser(){
  //   this.registerservice.newUser(this.regForm.value);
  //   console.log("calles");
  //   alert("sucess");
  //   this.router.navigate(['/']);
  //    }

  // RegisterItem=new RegisterModel('null','null','null','null','null');

  constructor(private fb:FormBuilder,private router:Router,private registerservice:RegService) { }

  
  regForm=this.fb.group({
 
         username:['',[Validators.required,Validators.minLength(4),Validators.email]],
   password:['',[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      firstname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(14)]],
     lastname:['',Validators.required],
      contactno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

  })

 get username(){

 return this.regForm.get('username');

 }


  get password(){

return this.regForm.get('password');

  }

 get firstname(){

  return this.regForm.get('firstname');


 }

 get lastname(){

  return this.regForm.get('lastname');


 }

 get contactno(){

  return this.regForm.get('contactno');

  
 }


  AddUser(){
    this.registerservice.newUser(this.regForm.value);
    console.log("calles");
    alert("sucess");
    this.router.navigate(['/']);
     }

  

  ngOnInit(): void {

    // this.regForm=this.fb.group({

    //   username:['',Validators.required],
    //   password:['',Validators.required],
    //  firstname:['',Validators.required],
    //   lastname:['',Validators.required],
    //  contactno:['',Validators.required]


    // })

  }


}

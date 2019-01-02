import { Component, OnInit } from '@angular/core';
//Form
import {FormBuilder, FormGroup,Validator, Validators}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 registerForm:FormGroup;
 submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group(
      {
        name : ['',Validators.required],
        password : ['',Validators.required]
      }
    );
  }

  login(){
    this.submitted=true;
    console.log(this.registerForm.controls);
    if(this.registerForm.invalid){
      return;
    }
    
  }

  
  get object(){
    return this.registerForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup |any;
  email : string = '';
  password : string = '';
  constructor(private formBuilder: FormBuilder,private auth : AuthService) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['',[Validators.required,Validators.maxLength]],
    });
  }
  submitForm(){
    console.log(this.signupform.value)
  }
  register() {

    if(this.signupform.value.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.signupform.value.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.signupform.value.email,this.signupform.value.password);
    
    this.signupform.value.email = '';
    this.signupform.value.password = '';

  }

}

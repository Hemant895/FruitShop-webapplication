import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup | any ;
  constructor(private formBuilder: FormBuilder,private auth:AuthService) { }
  email : string = '';
  password : string = '';
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['',[Validators.required,Validators.maxLength]]
    });
  }
  login() {

    if(this.loginform.value.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.loginform.value.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.login(this.loginform.value.email,this.loginform.value.password);
    
    // this.loginform.value.email = '';
    // this.loginform.value.password = '';

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
 
  
}

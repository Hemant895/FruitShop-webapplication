import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email : string = '';
  loginform:FormGroup | any ;
  constructor(private formBuilder: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  forget() {

    if(this.loginform.value.email == '') {
      alert('Please enter email');
      return;
    }
    this.auth.forgotPassword(this.loginform.value.email);
    
    // this.loginform.value.email = '';
    // this.loginform.value.password = '';

  }
}

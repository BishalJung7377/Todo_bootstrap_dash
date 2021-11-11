import { Component, OnInit } from '@angular/core';
import { APIServiceService } from './../services/apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginformvalidation!: FormGroup
  loginAuthResp: any;
  hide = true;
  title = "TODO APP";
  logintoyAcc = "Login To Your account";
  welcomeback = "Welcome back! Please login to your account";
  elabel = "Email Address";
  plabel = "Password";
  emailerrmsg = "Email is required*";
  passworderrmsg = "Password is required*";
  passforget = "Forgot Password?";
  noregister = "Not Registered Yet?";
  creataCC = "Create account";
  email !: string;
  password !: string;
  submitted = false;
  valid = false;
  constructor(
    public loginAuth: APIServiceService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
    }
  ngOnInit(): void {
   this.initialize()
  }
  initialize(): void{
    this.loginformvalidation = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    })
  }

onSubmit() {
    this.loginAuth.userLogin(this.loginformvalidation.get('email')?.value,
      this.loginformvalidation.get('password')?.value)
      .subscribe(
        (response) => {
          this.loginAuthResp = response;
          if (response.token) {
            localStorage.setItem('token', response.token)
            this.router.navigate(['/dashboard'])
          }
        }
      )
  }
  get loginValidation() {
    return this.loginformvalidation.controls
  }
}

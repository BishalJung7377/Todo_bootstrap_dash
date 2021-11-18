import { APIServiceService } from '../services/api_service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginAuthResp: any;
  hide = true;
  title = 'TODO APP';
  logintoyourAccount = 'Login To Your account';
  welcomeBack = 'Welcome back! Please login to your account';
  emailLabel = 'Email Address';
  passwordLabel = 'Password';
  emailerrorMsg = 'Email is required*';
  passworderrorMsg = 'Password is required*';
  passwordForget = 'Forgot Password?';
  notRegister = 'Not Registered Yet?';
  creatAccount = 'Create account';
  email!: string;
  password!: string;
  submitted = false;
  valid = false;
  constructor(
    public loginAuth: APIServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initialize();
  }
  // validating forms function
  initialize(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  // login data submit
  onSubmit(): void {
    this.loginAuth
      .userLogin(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe((response) => {
        this.loginAuthResp = response;
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      });
  }
  get loginFormcontroller() {
    return this.loginForm.controls;
  }
}

import { APIServiceService } from '../services/api_service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { LoaderService } from '../services/loader/loader.service';
import { Users } from '../services/user';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    public loginAuth: APIServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public loaderService: LoaderService,
    private snackBar: MatSnackBar
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
    this.loginAuth.login().subscribe((response) => {
      this.loginAuthResp = response;
      const userEmail = this.loginForm.get('email')?.value;
      const userPassword = this.loginForm.get('password')?.value;
      const users = response.find((userData: any) => {
        return userData.email == userEmail && userData.password == userPassword;
      });

      if (users) {
        console.log('welcome to dashboard user');
        localStorage.setItem('token', users.name);
        setTimeout(this.routeDashboard.bind(this));
      } else {
        setTimeout(this.throwErrorMessage.bind(this));
      }
    });
  }
  routeDashboard() {
    this.router.navigate(['/dashboard']);
    this.toastr.success('Logged is Successfull', 'Logged In', {});

  }
  throwErrorMessage() {
    this.toastr.warning('Unable to log in, Please Check Credentials', 'Error Login', {});

  }

  get loginFormcontroller() {
    return this.loginForm.controls;
  }
}

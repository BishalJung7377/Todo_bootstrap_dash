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
      for (let users of this.loginAuthResp) {
        if (
          this.loginForm.get('email')?.value == users.email &&
          this.loginForm.get('password')?.value == users.password
        ) {
          localStorage.setItem('token', JSON.stringify(users));
          this.router.navigate(['/dashboard']);
          this.snackBar.open('Log in Successful', 'Success', {
            duration: 1000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        } else {
        }
      }
    });
  }

  get loginFormcontroller() {
    return this.loginForm.controls;
  }
}

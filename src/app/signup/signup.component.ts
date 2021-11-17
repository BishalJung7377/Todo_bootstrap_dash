import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupserviceService } from '../services/signup-api/signup_service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  title = 'TODO APP';
  name!: string;
  email!: string;
  signupAuthResp: any;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public signupAuth: SignupserviceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.signupInitialize();
  }

  signupInitialize(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      gender: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.signupAuth.userData = this.signupForm.value;
      localStorage.setItem(
        'usersignupdata',
        JSON.stringify(this.signupForm.value)
      );
    }
    this.router.navigate(['/setpassword']);
  }
  get signupValidData() {
    return this.signupForm.controls;
  }
  numericOnly(event: { key: string }): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  textOnly(event: { key: string }): boolean {
    let textpattern = /^([a-z])$/;
    let res = textpattern.test(event.key);
    return res;
  }
}

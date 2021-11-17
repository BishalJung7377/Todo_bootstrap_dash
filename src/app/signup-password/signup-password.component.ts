import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { SignupserviceService } from 'src/app/services/signup-api/signup_service.service';
import {
  passwordUppercase,
  specialeChars,
  numericPass,
  validateConfirmpassword,
} from '../Validator/validate';
import { SignupUserData } from 'src/app/signup/SignUpUserData';

@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['./signup-password.component.scss']
})
export class SignupPasswordComponent implements OnInit {
  title = 'TODO APP';
  signupdata: SignupUserData = new SignupUserData();
  PasswordForm!: FormGroup;
  logintext = 'Login';
  hide = true;
  hidenew = true;
  submit = false;
  newpassword!: string;
  cpassword!: string;
  emailSent = 'Email has been sent!';
  resetTxt =
    'Please check your inbox and click in the recieved link to reset password';
  toastr: any;
  constructor(
    private formBuilder: FormBuilder,
    public signupAuth: SignupserviceService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.passsworfFormView();
  }
  passsworfFormView(): void {
    this.PasswordForm = this.formBuilder.group(
      {
        newpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            passwordUppercase(),
            specialeChars(),
            numericPass(),
          ],
        ],
        cpassword: ['', [Validators.required]],
      },
      { validators: validateConfirmpassword() }
    );
  }
  get nepassword() {
    return this.PasswordForm.get('newpassword');
  }
  get confirmpassword() {
    return this.PasswordForm.get('cpassword');
  }
  onSubmit() {
    if (this.PasswordForm.valid) {
      this.signupdata = this.signupAuth.userData;
      this.signupdata.name = this.signupdata.name;
      this.signupdata.email = this.signupdata.email;
      this.signupdata.date = this.signupdata.date;
      this.signupdata.phone = this.signupdata.phone;
      this.signupdata.password = this.PasswordForm.value.cpassword;
      this.signupdata.gender = this.signupdata.gender;
      this.signupAuth.userSignUp(this.signupdata).subscribe((response) => {
      });
    } else {
      this.toastr.success("Error", "title", {
        timeOut: 500,
      }) 
    }
  }

}

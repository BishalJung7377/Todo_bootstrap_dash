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
import { SignupUserData } from 'src/app/signup/signup-user-data';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['./signup-password.component.scss'],
})
export class SignupPasswordComponent implements OnInit {
  title = 'TODO APP';
  signupData: SignupUserData = new SignupUserData();
  setpasswordForm!: FormGroup;
  loginText = 'Login';
  hidePassword = true;
  hidenewPassword = true;
  submit = false;
  newPassword!: string;
  confirmPassword!: string;
  emailSent = 'Email has been sent!';
  resetTxt =
    'Please check your inbox and click in the recieved link to reset password';
  constructor(
    private formBuilder: FormBuilder,
    public signupAuth: SignupserviceService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.passswordFormView();
  }
  passswordFormView(): void {
    this.setpasswordForm = this.formBuilder.group(
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
  get newPasswords() {
    return this.setpasswordForm.get('newpassword');
  }
  get confirmPasswords() {
    return this.setpasswordForm.get('cpassword');
  }
  onSubmit(): void {
    if (this.setpasswordForm.valid) {
      this.signupData = this.signupAuth.userData;
      this.signupData.name = this.signupData.name;
      this.signupData.email = this.signupData.email;
      this.signupData.date = this.signupData.date;
      this.signupData.phone = this.signupData.phone;
      this.signupData.password = this.setpasswordForm.value.cpassword;
      this.signupData.gender = this.signupData.gender;
      this.signupAuth.userSignUp(this.signupData).subscribe((response) => {
        window.location.href = '';
      });
    } else {
      this.toastr.success('Error', 'title', {
        timeOut: 500,
      });
    }
  }
  showToast(): void {
    this.toastr.success('Registered Successfully', 'Registered', {
      timeOut: 500,
    });
  }
}

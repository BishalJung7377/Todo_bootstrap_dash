import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class ForgotPasswordComponent implements OnInit {
  title = 'TODO APP';
  loginText = 'Login To Your account';
  emailRegistrataion = 'Welcome back! Please login to your account';
  emailErrormsg = 'Email is not valid';
  emailLabel = 'Email Address';
  send = 'Send';
  login = 'Login';
  resetEmail!: FormGroup;
  submit = false;
  email!: string;
  emailSent = 'Email has been sent!';
  resetTxt ='Please check your inbox and click in the recieved link to reset password';
    constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.passwordReset();
  }

  // password reset function 
  passwordReset(): void {
    this.resetEmail = this.formBuilder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  get resetEmailvalue() {
    return this.resetEmail.controls;
  }
  // modal for sending email 
  open(content:any) {
    this.modal.open(content, { centered: true, windowClass: 'my-class' });
  }
}

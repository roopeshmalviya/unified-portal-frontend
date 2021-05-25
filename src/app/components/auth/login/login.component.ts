import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router,
    private notify: NotifierService
  ) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    },
    );
  }
  get f() { return this.logInForm.controls; }

  onSubmit() {
    console.log(this.logInForm.value);
    this.authentication.login(this.logInForm.value).subscribe({
      next: data => {
        console.log(data.status);
        this.notify.notify('info', "You have logged In");
        localStorage.setItem('token', data.headers.get('token'));
        this.authentication.loadToken();
        // console.log(this.authentication.authtoken);
        this.router.navigateByUrl('/dashboard');
      },
      error: error => {
        this.notify.notify('error', error.message);
        console.log(error)
      }
    })
  }

  onReset(){

  }

}
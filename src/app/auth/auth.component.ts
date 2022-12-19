import { Router } from '@angular/router';
import { AuthResponseData } from './../model/auth-response-data';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
      this.isLoading = false;
    } else {
      authObs = this.authService.signup(email, password);
      this.isLoading = false;
    }
    authObs.subscribe({
      next: (resData) => {
        this.error = null;
        this.router.navigate(['/recipes'])
      },
      error: (errorMessage) => {
        this.error = errorMessage;
      },
    });

    form.reset();
  }
}

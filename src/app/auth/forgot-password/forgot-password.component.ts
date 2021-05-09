import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { ForgotPassword } from './forgotPassword.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  email: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onReset(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.email = form.value.email;
    this.authService.forgotPassword(this.email).subscribe();
  }

  getForgotMessage(): string {
    return localStorage.getItem('forgotpassword')
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}

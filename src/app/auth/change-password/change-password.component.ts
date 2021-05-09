import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  currentPassword: string;
  newPassword: string;
  confirmPassword = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onChange(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if (form.value.newpassword == form.value.confirmpassword) {
      this.currentPassword = form.value.currentpassword;
      this.newPassword = form.value.newpassword;
      this.authService
        .changePassword(
          localStorage.getItem('email'),
          this.currentPassword,
          this.newPassword
        )
        .subscribe();
      this.confirmPassword = true;
      form.reset();
    } else {
      this.confirmPassword = false;
    }
  }

  getChangeMessage(): string {
    return localStorage.getItem('changepassword');
  }

  ngOnDestroy(): void {
    localStorage.removeItem('changepassword');
  }
}

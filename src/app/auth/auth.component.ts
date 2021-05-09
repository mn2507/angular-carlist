import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, DoCheck {
  email: string;
  password: string;
  isLoading = false;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.onNavigate();
    this.onLoggedIn();
  }

  onLogin(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      return;
    }
    this.email = form.value.email;
    this.password = form.value.password;
    this.isLoading = false;
    this.authService.signin(this.email, this.password).subscribe();
  }

  onNavigate() {
    if (this.getToken()) {
      this.router.navigate(['/products']);
    }
  }

  onLoggedIn() {
    if (this.getToken()) {
      localStorage.setItem('email', this.email);
    }
  }

  getToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}

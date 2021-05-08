import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  user: User;
  email: string;
  password: string;
  isLoading = false;
  isLoggedIn = false

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.email = form.value.email;
    this.password = form.value.password;
    this.isLoading = false;
    this.authService.signin(this.email, this.password).subscribe();
    this.router.navigate(['/dashboard']);
  }
}

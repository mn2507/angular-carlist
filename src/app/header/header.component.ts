import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User;
  public now: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  clearLocalDb() {
    localStorage.clear();
  }

  getToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getDispUsername(): string {
    return localStorage.getItem('displayusername')
  }

  setDateAndTime() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
}

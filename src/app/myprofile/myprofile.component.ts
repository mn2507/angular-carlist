import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUserName(): string {
    return localStorage.getItem('displayusername')
  }

  getEmail(): string {
    return localStorage.getItem('email')
  }

}

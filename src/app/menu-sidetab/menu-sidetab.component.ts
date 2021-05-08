import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidetab',
  templateUrl: './menu-sidetab.component.html',
  styleUrls: ['./menu-sidetab.component.css']
})
export class MenuSidetabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}

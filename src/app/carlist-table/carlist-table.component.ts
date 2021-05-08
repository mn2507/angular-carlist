import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-carlist-table',
  templateUrl: './carlist-table.component.html',
  styleUrls: ['./carlist-table.component.css'],
})
export class CarlistTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'image', 'price'];
  dataSource = [];
  user: User;
  public isLoggedIn = false;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.fetchCarLists().subscribe((result) => {
      this.dataSource = result;
    });
  }
}

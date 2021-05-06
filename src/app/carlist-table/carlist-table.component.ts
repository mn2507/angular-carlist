import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-carlist-table',
  templateUrl: './carlist-table.component.html',
  styleUrls: ['./carlist-table.component.css']
})
export class CarlistTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'image',
    'price',
  ];
  dataSource = [];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchCarLists().subscribe((result) => {
      this.dataSource = result;
    });
  }

}

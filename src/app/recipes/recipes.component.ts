import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'image',
    'price',
  ];
  dataSource = [];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.fetchCarLists().subscribe((result) => {
      this.dataSource = result;
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CarList } from '../../carlist.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: CarList;
  @Input() index: number;

  ngOnInit(): void {}
}

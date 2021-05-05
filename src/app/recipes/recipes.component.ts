import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: CarList;

  constructor() {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: CarList) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}

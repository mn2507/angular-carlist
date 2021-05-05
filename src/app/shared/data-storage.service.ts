import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { CarList, List } from '../recipes/carlist.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  // storeRecipes() {
  //   const recipes = this.recipeService.getRecipes();
  //   this.http
  //     .put(
  //       'https://angular-recipe-tutorial-19af6-default-rtdb.firebaseio.com/recipes.json',
  //       recipes
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  fetchRecipes() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/');

    return this.http
      .post<List>(
        'http://localhost:8081/user/getcarlist',
        {
          carname: '',
          pageindex: '1',
          pagesize: '10',
        },
        { headers }
      )
      .pipe(
        map((List) => {
          return List.List.map((list) => {
            return {
              ...list,
              carVarianceInfo: list.carVarianceInfo ? list.carVarianceInfo : [],
            };
          });
        }),
        tap((List) => {
          this.recipeService.setRecipes(List);
        })
      );
  }
}

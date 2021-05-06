import { Injectable } from '@angular/core';
import { CarVarianceInfo } from '../shared/ingredient.model';
import { CarList } from './carlist.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarListService {
  recipesChanged = new Subject<CarList[]>();

  // private recipes: CarList[] = [
  //   new CarList(
  //     'Saapadu oh',
  //     'Nalla irukkum',
  //     'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  //     [new CarVarianceInfo('Egg', 2), new CarVarianceInfo('Meat', 3)]
  //   ),
  //   new CarList(
  //     'Burger Oh',
  //     'Sumaarah irukkum',
  //     'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg',
  //     [new CarVarianceInfo('Buns', 2), new CarVarianceInfo('Tomato', 1)]
  //   ),
  // ];

  private carList: CarList[] = [];

  constructor(private slService: ShoppingListService) {}

  setCarList(carlists: CarList[]) {
    this.carList = carlists;
    this.recipesChanged.next(this.carList.slice());
  }

  getCarLists() {
    return this.carList.slice();
  }

  getCarList(index: number) {
    return this.carList[index];
  }

  addIngredientsToShoppingList(ingredients: CarVarianceInfo[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: CarList) {
    this.carList.push(recipe);
    this.recipesChanged.next(this.carList.slice());
  }

  updateRecipe(index: number, newRecipe: CarList) {
    this.carList[index] = newRecipe;
    this.recipesChanged.next(this.carList.slice());
  }

  deleteRecipe(index: number) {
    this.carList.splice(index, 1);
    this.recipesChanged.next(this.carList.slice());
  }
}

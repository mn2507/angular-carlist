import { Injectable } from '@angular/core';
import { CarList } from './carlist.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarListService {
  recipesChanged = new Subject<CarList[]>();

  private carList: CarList[] = [];

  constructor() {}

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
}

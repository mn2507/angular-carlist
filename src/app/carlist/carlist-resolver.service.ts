import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { CarList } from './carlist.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CarListService } from './carlist.service';

@Injectable({ providedIn: 'root' })
export class CarlistResolverService implements Resolve<CarList[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private carlistService: CarListService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const carlist = this.carlistService.getCarLists();

    if (carlist.length === 0) {
      return this.dataStorageService.fetchCarLists();
    } else {
      return carlist;
    }
  }
}

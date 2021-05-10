import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { List } from '../carlist/carlist.model';
import { CarListService } from '../carlist/carlist.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private carlistService: CarListService) {}

  fetchCarLists() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

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
          this.carlistService.setCarList(List);
        })
      );
  }
}

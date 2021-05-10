import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarList } from '../carlist.model';
import { CarListService } from '../carlist.service';

@Component({
  selector: 'app-carlist-detail',
  templateUrl: './carlist-detail.component.html',
  styleUrls: ['./carlist-detail.component.css'],
})
export class CarlistDetailComponent implements OnInit {
  carList: CarList;
  id: number;

  constructor(
    private carListService: CarListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.carList = this.carListService.getCarList(this.id);
      this.carList == null ? this.router.navigate(['/invalid']) : null
    });
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarList } from '../carlist.model';
import { CarListService } from '../carlist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
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
    });
  }

  onAddToShoppingList() {
    this.carListService.addIngredientsToShoppingList(
      this.carList.carVarianceInfo
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.carListService.deleteRecipe(this.id);
    this.router.navigate(['/dashboard']);
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

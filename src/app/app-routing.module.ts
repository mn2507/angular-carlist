import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CarlistResolverService } from './recipes/carlist-resolver.service';
import { CarlistTableComponent } from './carlist-table/carlist-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: RecipesComponent,
    children: [
      { path: '', component: CarlistTableComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [CarlistResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [CarlistResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: 'signin', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

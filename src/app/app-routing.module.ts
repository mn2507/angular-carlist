import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CarlistResolverService } from './recipes/carlist-resolver.service';
import { CarlistTableComponent } from './carlist-table/carlist-table.component';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthService } from './auth/auth.service';
import { InvalidProductComponent } from './invalid-product/invalid-product.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    component: DashboardComponent,
  },
  {
    path: 'products',
    data: { breadcrumb: 'Products' },
    canActivate: [AuthService],
    component: RecipesComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        component: CarlistTableComponent,
      },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        data: { breadcrumb: { alias: 'ProductsId' } },
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
  { path: 'signin', data: { breadcrumb: 'Sign-In' }, component: AuthComponent },
  {
    path: 'forgotpassword',
    data: { breadcrumb: 'Forget Password' },
    component: ForgotPasswordComponent,
  },
  {
    path: 'changepassword',
    data: { breadcrumb: 'Change Password' },
    canActivate: [AuthService],
    component: ChangePasswordComponent,
  },
  {
    path: 'myprofile',
    data: { breadcrumb: 'My Profile' },
    canActivate: [AuthService],
    component: MyprofileComponent,
  },
  {
    path: 'unauthorized',
    data: { breadcrumb: 'Unauthorized' },
    component: UnauthorizedComponent,
  },
  {
    path: 'invalid',
    data: { breadcrumb: 'Products' },
    canActivate: [AuthService],
    component: InvalidProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

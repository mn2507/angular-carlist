import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';
import { CarlistDetailComponent } from './carlist/carlist-detail/carlist-detail.component';
import { CarlistResolverService } from './carlist/carlist-resolver.service';
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
    component: CarlistComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        component: CarlistTableComponent,
      },
      {
        path: ':id',
        data: { breadcrumb: { alias: 'ProductsId' } },
        component: CarlistDetailComponent,
        resolve: [CarlistResolverService],
      },
    ],
  },
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

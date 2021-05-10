import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/carlist.component';
import { RecipeDetailComponent } from './recipes/carlist-detail/carlist-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CarlistTableComponent } from './carlist-table/carlist-table.component';
import { MenuSidetabComponent } from './menu-sidetab/menu-sidetab.component';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPopupComponent } from './dashboard/dialog-popup/dialog-popup.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { InvalidProductComponent } from './invalid-product/invalid-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DropdownDirective,
    CarlistTableComponent,
    MenuSidetabComponent,
    AuthComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    MyprofileComponent,
    DashboardComponent,
    UnauthorizedComponent,
    DialogPopupComponent,
    InvalidProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    BreadcrumbModule,
    MatIconModule,
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent],
})
export class AppModule {}

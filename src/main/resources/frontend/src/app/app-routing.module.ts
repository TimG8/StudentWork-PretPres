import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGardService } from './service/auth-gard.service';

import { ProfileComponent } from './profile/profile.component';
import { NewAdvertisementComponent } from './new-advertisement/new-advertisement.component';
import { MyAdvertisementComponent } from './my-advertisement/my-advertisement.component';
import { UsersComponent } from './users/users.component';
import { RoleGuardService } from './service/role-guard.service';
import { HomeComponent } from './home/home.component';
import { AllAdvertisementsComponent } from './all-advertisements/all-advertisements.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SearchAdvertisementComponent } from './search-advertisement/search-advertisement.component';
import { ModifyAdvertisementComponent } from './modify-advertisement/modify-advertisement.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGardService] },
  { path: 'users', component: UsersComponent, canActivate: [RoleGuardService] },
  { path: 'categories', component: CategoryComponent, canActivate: [RoleGuardService] },
  { path: 'new-advertisement', component: NewAdvertisementComponent, canActivate: [AuthGardService] },
  { path: 'my-advertisement', component: MyAdvertisementComponent, canActivate: [AuthGardService] },
  { path: 'all-advertisements', component: AllAdvertisementsComponent },
  { path: 'advertisement/:id', component: AdvertisementComponent },
  { path: 'search-advertisement', component: SearchAdvertisementComponent },
  { path: 'modify-advertisement/:id', component: ModifyAdvertisementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGardService } from "./service/auth-gard.service";

import { ProfileComponent } from "./profile/profile.component";
import { NewAdvertisementComponent } from "./new-advertisement/new-advertisement.component";
import { MyAdvertisementComponent } from "./my-advertisement/my-advertisement.component";
import { UsersComponent } from "./users/users.component";
import { RoleGuardService } from "./service/role-guard.service";
import { HomeComponent } from "./home/home.component";
import { AllAdvertisementsComponent } from "./all-advertisements/all-advertisements.component";

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'profile', component:ProfileComponent, canActivate:[AuthGardService] },
  { path:'users', component:UsersComponent, canActivate:[RoleGuardService] },
  { path:'new-advertisement', component:NewAdvertisementComponent, canActivate:[AuthGardService] },
  { path:'my-advertisement', component:MyAdvertisementComponent, canActivate:[AuthGardService] },
  { path:'all-advertisements', component:AllAdvertisementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

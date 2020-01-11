import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGardService } from "./service/auth-gard.service";

import { ProfileComponent } from "./profile/profile.component";
import { NewAdvertisementComponent } from "./new-advertisement/new-advertisement.component";

const routes: Routes = [
  { path:'profile', component:ProfileComponent, canActivate:[AuthGardService] },
  { path:'new-advertisement', component:NewAdvertisementComponent, canActivate:[AuthGardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

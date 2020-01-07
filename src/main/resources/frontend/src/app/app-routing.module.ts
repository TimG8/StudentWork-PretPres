import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AuthGardService} from "./service/auth-gard.service";


const routes: Routes = [
  {path:'profile', component:ProfileComponent, canActivate:[AuthGardService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

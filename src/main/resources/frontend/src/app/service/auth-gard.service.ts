import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ProfileService} from "../profile/profile.service";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AuthentificationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()){
      return true;
    }
    return false;
  }
}

import { Injectable } from '@angular/core';
import {User} from "../model/model.user";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user : User;

  constructor() {
    this.user = new User();
  }

  authenticate(mail, password) {
    if (mail === "jean@gmail.com" && password === "password") {
      sessionStorage.setItem('mail', mail)
      this.user.mail = mail;
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('mail')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('mail')
  }

}

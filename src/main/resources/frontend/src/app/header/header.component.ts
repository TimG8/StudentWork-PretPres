import { Component, OnInit } from '@angular/core';
import {User} from "../model/model.user";
import {delay} from "rxjs/operators";
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('id');
    if(user != null){
      this.user.getSessionItems();
      $('#signin').modal('hide');
      $('#register').modal('hide');
    }
    return !(user === null);
  }

  isAdmin(){
    this.user.getSessionItems();
    return this.user.isAdmin();
  }
}

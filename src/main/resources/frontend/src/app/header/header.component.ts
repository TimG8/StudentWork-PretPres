import { Component, OnInit } from '@angular/core';
import {User} from "../model/model.user";
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
      this.user.name = sessionStorage.getItem("name");
      this.user.firstName = sessionStorage.getItem("firstName");
      $('#signin').modal('hide');
      $('#register').modal('hide');
    }
    return !(user === null);
  }



}

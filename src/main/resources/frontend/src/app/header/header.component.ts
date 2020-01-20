import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service'

import { User } from "../model/model.user";

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user : User;

  title : string;

  constructor(
    private router: Router,
    private advertisementService : AdvertisementService
  ) { }

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

  isAdmin() {
    this.user.getSessionItems();
    return this.user.isAdmin();
  }

  isHome() {
    return this.router.url === '/';
  }

  search() {
    this.advertisementService.setSearchTitle(this.title);
    this.router.navigate(['/search-advertisement']);
  }
}

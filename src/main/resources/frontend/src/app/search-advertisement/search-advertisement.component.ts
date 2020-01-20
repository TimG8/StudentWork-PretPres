import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service'

@Component({
  selector: 'app-search-advertisement',
  templateUrl: './search-advertisement.component.html',
  styleUrls: ['./search-advertisement.component.css']
})

export class SearchAdvertisementComponent implements OnInit {
  ads : Advertisement[];

  mySubscription: any;

  constructor(
    private advertisementService : AdvertisementService,
    private router : Router
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.advertisementService.searchByTitle()
      .subscribe(data => {
        this.ads = data;
      });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service';
import { User } from '../model/model.user';

@Component({
  selector: 'app-search-advertisement',
  templateUrl: './search-advertisement.component.html',
  styleUrls: ['./search-advertisement.component.css']
})

export class SearchAdvertisementComponent implements OnInit, OnDestroy {
  ads: Advertisement[];
  user: User;

  mySubscription: any;

  constructor(
    private adService: AdvertisementService,
    private router: Router
  ) {
    this.user = new User();
    this.ads = [];

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
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
    this.user.getSessionItems();

    if (this.user.isAdmin()) {
      this.adService.searchByTitle().subscribe((ads: Advertisement[]) => {
        for( var ad in ads ){
          if(ads[ad].pic != null){
            ads[ad].picture = 'data:image/jpeg;base64,' + ads[ad].pic.image;
          }
        }
        this.ads = ads;
       });
    } else {
      this.adService.searchByTitleAndValidated()
        .subscribe(data => {
          this.ads = data;
        });
    }
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  delete(uuid: string) {
    this.adService.deleteAd(uuid).subscribe(() => {
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  validate(uuid: string) {
    this.adService.validateAd(uuid).subscribe(() => {
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  unvalidate(uuid: string) {
    this.adService.unvalidateAd(uuid).subscribe(() => {
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}

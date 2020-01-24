import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';
import { Router } from '@angular/router';
import { AdvertisementService } from '../service/advertisement.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-advertisements',
  templateUrl: './all-advertisements.component.html',
  styleUrls: ['./all-advertisements.component.css']
})

export class AllAdvertisementsComponent implements OnInit {
  ads: Advertisement[];
  user: User;

  constructor(
    private router: Router,
    private adService: AdvertisementService
  ) {
    this.user = new User();
    this.ads = [];
  }

  ngOnInit() {
    this.user.getSessionItems();
    if (this.user.isAdmin()) {
      this.getAllAds();
    } else {
      this.getValidatedAds();
    }
  }

  getAllAds() {
    this.adService.getAllAds().subscribe((ads: Advertisement[]) => {
      this.ads = ads;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getValidatedAds() {
    this.adService.getValidatedAds().subscribe((ads: Advertisement[]) => {
      this.ads = ads;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
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

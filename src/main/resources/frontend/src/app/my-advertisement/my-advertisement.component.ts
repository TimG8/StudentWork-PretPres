import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'

import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';
import { AdvertisementService } from '../service/advertisement.service'

@Component({
  selector: 'app-my-advertisement',
  templateUrl: './my-advertisement.component.html',
  styleUrls: ['./my-advertisement.component.css']
})

export class MyAdvertisementComponent implements OnInit {
  ads : Advertisement[];
  user : User;

  constructor(
    private router: Router,
    private advertisementService : AdvertisementService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.getSessionItems();

    this.advertisementService.findByUserId(this.user).subscribe(data => {
      this.ads = data;
    });
  }

  delete(uuid : string) {
    this.advertisementService.deleteAd(uuid).subscribe(() => {
      this.ngOnInit();
    }, (error : HttpErrorResponse) => {
      console.log(error);
    });
  }
}

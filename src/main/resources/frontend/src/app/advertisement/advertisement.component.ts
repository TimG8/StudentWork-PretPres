import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/model.user";
import {Advertisement} from "../model/model.advertisement";
import {AdvertisementService} from "./advertisement.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  user : User;
  ad : Advertisement;


  constructor(
    private route: ActivatedRoute,
    private service: AdvertisementService,
    private router: Router) {
    this.user = new User();
    this.ad = new Advertisement();
  }

  ngOnInit() {
    this.user.getSessionItems();

    this.route.paramMap.subscribe(params => {
      this.getAdvertisement(this.route.snapshot.params.id);
    });
  }

  getAdvertisement(uuid){
    this.service.findByUuid(uuid).subscribe((ad : Advertisement) => {
      this.ad = ad;
      if(!this.ad.validated && !this.user.isAdmin()){
        this.router.navigate(['all-advertisements']);
      }
    }, (error : HttpErrorResponse) => {
      //this.router.navigate(['all-advertisements']);
      console.log(error);
    });
  }

}

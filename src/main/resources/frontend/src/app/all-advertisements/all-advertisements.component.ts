import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../model/model.advertisement";
import {User} from "../model/model.user";
import {Router} from "@angular/router";
import {AdvertisementService} from "../service/advertisement.service";
import {AllAdvertisementsService} from "./all-advertisements.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-all-advertisements',
  templateUrl: './all-advertisements.component.html',
  styleUrls: ['./all-advertisements.component.css']
})
export class AllAdvertisementsComponent implements OnInit {

  ads : Advertisement[];
  user : User;

  constructor(
    private router: Router,
    private adService : AllAdvertisementsService
  ) {
    this.user = new User();
    this.ads = [];
  }

  ngOnInit() {
    this.user.getSessionItems();
    if(this.user.isAdmin()){
      this.getAllAds();
    }else{
      this.getValidatedAds();
    }
  }

  getAllAds(){
    this.adService.getAllAds().subscribe((ads : Advertisement[]) => {
      this.ads = ads;
    }, (error : HttpErrorResponse) => {
      console.log(error);
    });
  }

  getValidatedAds(){
    this.adService.getValidatedAds().subscribe((ads : Advertisement[]) => {
      this.ads = ads;
    }, (error : HttpErrorResponse) => {
      console.log(error);
    });
  }

  delete(uuid){
    this.adService.deleteAd(uuid).subscribe((ads : Advertisement[]) => {
      this.ads = ads;
    }, (error : HttpErrorResponse) => {
      console.log(error);
    });
  }

  validate(uuid){
    this.adService.validateAd(uuid).subscribe((ads : Advertisement[]) => {
      this.ads = ads;
    }, (error : HttpErrorResponse) => {
      console.log(error);
    });
  }
}

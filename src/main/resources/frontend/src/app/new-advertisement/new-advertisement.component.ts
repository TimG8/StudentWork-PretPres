import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'

import { Advertisement } from '../model/model.advertisement';
import { User } from '../model/model.user';
import { AdvertisementService } from '../service/advertisement.service'

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})

export class NewAdvertisementComponent implements OnInit {
  baseUrl = 'http://localhost:8080/advertisement';

  user : User;
  title : "";
  address : "";
  description : "";
  price : "";
  picture : File;

  constructor(
    private router: Router,
    private advertisementService : AdvertisementService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.user.getSessionItems();
  }

  createAdvertisement() {
    this.advertisementService.createAdvertisement(this.title, this.address, this.description, this.price, this.user, this.picture)
      .subscribe((ad : Advertisement) => {
        (error : HttpErrorResponse) => {
          console.log(error);
        }
      });

    setTimeout( () => { this.router.navigate(['/my-advertisement']); }, 500);
  }
  processFile(imageInput){
      //this.picture = event.target.files[0]
  }

}

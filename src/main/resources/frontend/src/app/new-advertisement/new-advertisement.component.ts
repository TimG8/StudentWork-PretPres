import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";

import { Advertisement } from '../model/model.advertisement';

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})

export class NewAdvertisementComponent implements OnInit {
  baseUrl = 'http://localhost:8080/advertisement';

  ad : Advertisement;
  title : "";
  address : "";
  description : "";
  price : "";

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() { }

  createAdvertisement() {
    let request = this.baseUrl + '/create'

    this.ad = new Advertisement();

    this.ad.title = this.title;
    this.ad.address = this.address;
    this.ad.description = this.description;
    this.ad.price = this.price;

    this.httpClient.post<Advertisement>(request, this.ad)
      .subscribe((ad : Advertisement) => {
        (error : HttpErrorResponse) => {
          console.log(error);
        }
      });
  }
}

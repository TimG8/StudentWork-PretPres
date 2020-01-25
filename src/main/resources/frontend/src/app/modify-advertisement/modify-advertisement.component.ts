import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../model/model.user';
import { Advertisement } from '../model/model.advertisement';
import { AdvertisementService } from '../service/advertisement.service';
import { Category } from '../model/model.category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-modify-advertisement',
  templateUrl: './modify-advertisement.component.html',
  styleUrls: ['./modify-advertisement.component.css']
})

export class ModifyAdvertisementComponent implements OnInit {

  user: User;
  ad: Advertisement;
  title: '';
  address: '';
  description: '';
  price: '';
  picture: File;
  category: Category;

  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private service: AdvertisementService,
    private catService: CategoryService,
    private router: Router) {
    this.user = new User();
    this.ad = new Advertisement();
  }

  ngOnInit() {
    this.user.getSessionItems();

    this.route.paramMap.subscribe(params => {
      this.getAdvertisement(this.route.snapshot.params.id);
    });

    this.categories = [];
    this.catService.getCategories().subscribe((cat: Category[]) => {
      this.categories = cat;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getAdvertisement(uuid) {
    this.service.findByUuid(uuid).subscribe((ad: Advertisement) => {
      this.ad = ad;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  updateAdvertisement() {
    if (this.title != null) {
      this.ad.title = this.title;
    }

    if (this.address != null) {
      this.ad.address = this.address;
    }

    if (this.description != null) {
      this.ad.description = this.description;
    }

    if (this.price != null) {
      this.ad.price = this.price;
    }

    this.ad.category = this.category;

    this.service.updateAdvertisement(this.ad).subscribe(() => {
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });

    setTimeout( () => { this.router.navigate(['/my-advertisement']); }, 500);
  }
}

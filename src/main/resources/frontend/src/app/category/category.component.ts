import { Component, OnInit } from '@angular/core';
import {Category} from '../model/model.category';
import {HttpErrorResponse} from '@angular/common/http';
import {CategoryService} from '../service/category.service';
import {User} from '../model/model.user';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  categoryName = 'Sans catégorie';

  constructor(
    private catService: CategoryService
  ) { }

  ngOnInit() {
    this.categories = [];

    this.catService.getCategories().subscribe((cat: Category[]) => {
      this.categories = cat;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  delete(id) {
    this.catService.deleteCategory(id).subscribe((cat: Category[]) => {
      this.categories = cat;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  checkCategory() {
    for (const cat of this.categories) {
      if (cat.name === this.categoryName) {
        alert('Une catégorie avec le même nom existe déjà !');
        return;
      }
    }

    this.validate(this.categoryName);
  }

  validate(name) {
    this.catService.addCategory(name).subscribe((cat: Category) => {
      this.categories.push(cat);
      this.categoryName = 'Sans catégorie';
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}

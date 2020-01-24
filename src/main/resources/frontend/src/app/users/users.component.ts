import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../model/model.user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  delete(id) {
    this.usersService.deleteUser(id).subscribe((users: User[]) => {
      this.users = users;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  userIsAdmin(user: User) {
    return user.role.name === 'Admin';
  }
}

import { Role } from './model.role';

export class User {
   id;
   password = '';
   mail = '';
   phoneNumber = '';
   firstName = '';
   name = '';
   address = '';
   role: Role;

   constructor() {
     this.role = new Role();
   }

  public getSessionItems() {
    this.id = sessionStorage.getItem('id');
    this.name = sessionStorage.getItem('name');
    this.firstName = sessionStorage.getItem('firstName');
    this.mail = sessionStorage.getItem('mail');
    this.password = sessionStorage.getItem('password');
    this.phoneNumber = sessionStorage.getItem('phone');
    this.address = sessionStorage.getItem('address');
    this.role.name = sessionStorage.getItem('role');
  }

  public isAdmin() {
    return this.role.name === 'Admin';
  }
}

import {Role} from "./model.role";

export class User {
   id;
   password = "";
   mail = "";
   phoneNumber = "";
   firstName = "";
   name = "";
   role : Role;

  public setSessionItems(){
    sessionStorage.setItem("id",this.id);
    sessionStorage.setItem("name",this.name);
    sessionStorage.setItem("firstName",this.firstName);
    sessionStorage.setItem("mail",this.mail);
    sessionStorage.setItem("password",this.password);
    sessionStorage.setItem("phone",this.phoneNumber);
  }

  public getSessionItems(){
    this.id = sessionStorage.getItem("id");
    this.name = sessionStorage.getItem("name");
    this.firstName = sessionStorage.getItem("firstName");
    this.mail = sessionStorage.getItem("mail");
    this.password = sessionStorage.getItem("password");
    this.phoneNumber = sessionStorage.getItem("phone");
  }
}

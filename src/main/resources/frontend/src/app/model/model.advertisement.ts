import {User} from "./model.user";

export class Advertisement {
  id;
  title = '';
  address = '';
  description = '';
  price = '';
  uuid = '';
  user_id = '';
  validated: boolean;
  user : User;
}

import {User} from "./model.user";
import {Category} from "./model.category";

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
  category: Category;
}

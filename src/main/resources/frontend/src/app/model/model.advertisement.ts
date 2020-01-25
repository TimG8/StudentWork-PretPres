import {User} from "./model.user";
import {Category} from "./model.category";

import { Picture } from './model.picture';

export class Advertisement {
  id;
  title = '';
  address = '';
  description = '';
  price = '';
  uuid = '';
  user_id = '';
  validated: boolean;
  pic: Picture;
  picture;
  user : User;
  category: Category;
}

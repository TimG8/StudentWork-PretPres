import { User } from './model.user';
import { Category } from './model.category';
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
  user: User;
  pic: Picture;
  picture;
  category: Category;
}

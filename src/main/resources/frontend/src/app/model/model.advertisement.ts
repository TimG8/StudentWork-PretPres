import { Picture } from './model.picture';

export class Advertisement {
  id;
  title = '';
  address = '';
  description = '';
  price = '';
  uuid = '';
  validated: boolean;
  pic: Picture;
  picture;
}

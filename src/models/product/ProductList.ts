import { PageModel } from 'src/models/page.model';
import { Product } from 'src/models/product/Product';

//주문 목록
export interface ProductList extends PageModel {
  totalSize?: number;
  list?: Product[];
}

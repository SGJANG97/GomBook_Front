import { PageModel } from 'src/models/page.model';
import { Promotion } from 'src/models/promotion/Promotion';

//프로모션 리스트
export interface PromotionList extends PageModel {
  totalSize?: number;
  list?: Array<Promotion>;
}

import { PageModel } from 'src/models/page.model';

export interface OneOnOenList extends PageModel {
  totalSize?: number;
  list?: any[];
}

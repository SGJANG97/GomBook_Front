import { CommonModel } from 'src/models/common.model';
import { CodesDetail } from 'src/models/common/CodesDetail';

//공통코드 상세 목록
export interface CodesDetailList extends CommonModel {
  codeDetailList?: Array<CodesDetail>;
}

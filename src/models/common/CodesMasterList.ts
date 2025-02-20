import { CommonModel } from 'src/models/common.model';
import { CodesMaster } from 'src/models/common/CodesMaster';

//공통코드 마스터 목록
export interface CodesMasterList extends CommonModel {
  totalSize?: number;
  masterCodeList?: Array<CodesMaster>;
}

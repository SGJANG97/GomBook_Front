import { ErpApplicant } from 'src/models/member/ErpApplicant';

//회원정보신청 목록
export interface MemberJoinList {
  totalSize?: number;
  list?: ErpApplicant[];
}

import { PageModel } from 'src/models/page.model';

//회원가입 신청 검색 조건
export interface MemberJoinReqSearchParams extends PageModel {
  AskCompanyName?: string | null; //상호명
  execYn?: string | null; //처리 상태
  updateUserType?: string | null; //처리 담당자 구분
  updateUserName?: string | null; //처리 담당자 이름
}

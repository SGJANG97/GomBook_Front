import { CommonModel } from 'src/models/common.model';

//배송기사정보
export interface UserDlv extends CommonModel {
  userId: string; // 사용자아이디(사번)
  password: Blob; // 비밀번호
  userName: string; // 사용자명(담당자명)
  userEmail: string; // 이메일
  userHpNo: string; // 휴대폰번호
  roleId: string; // 권한유형코드 - 코스전체/지정코스
  roleDetailId: string; // 권한유형상세(지정코스일 경우 코스ID)
  description: string; // 비고
  useYn: string; // 사용여부
  isTmpPassword: string; // 최초생성시 Y처리
  loginStayYn: string; // 로그인유지여부
}

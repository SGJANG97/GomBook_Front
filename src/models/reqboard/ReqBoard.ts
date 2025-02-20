import { CommonModel } from 'src/models/common.model';

//문의하기
export interface ReqBoard extends CommonModel {
  ReqId?: string; //문의신청아이디
  ReqType?: string; //문의유형
  ReqName?: string; //문의제목
  ReqRefId?: string; //신청참조아이디
  ReqDt?: string; //요청일자
  ReqUserType?: string; //문의자타입
  ReqProcStatusCd?: string; //처리진행상태코드
  ReqProcDt?: string; //처리일시
  ReqReadCnt?: string; //조회count
  ReqAcptUserId?: string; //접수자
  ReqAcptMtod?: string; //문의접수방법
  ReqUserReqType?: string; //고객요구사항타입
  ReqSendAddr?: string; //배송처주소
  ReqIsClaim?: string; //클레임구분
  ReqAgreePrivInfo?: string; //개인정보동의여부
  ReqContents?: string; //문의내용
  ReqFile1Id?: string; //문의첨부파일1
  ReqFile2Id?: string; //문의첨부파일2
  ReqFile3Id?: string; //문의첨부파일3
  ReqAnswer?: string; //문의답변
  ReqAnsUserId?: string; //답변자
  ReqSatisfy?: string; //만족도별개수
  ReqSatisfyComment?: string; //만조도코멘트
  ReqSatisfyDt?: string; //만족도입력일시
}

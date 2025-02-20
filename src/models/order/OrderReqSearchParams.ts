import { PageModel } from 'src/models/page.model';

//주문 검색
export interface OrderReqSearchParams extends PageModel {
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
  orderId?: string | null; //주문번호
  keywordType?: string | null; //키워드검색 select
  keywordText?: string | null; //키워드검색 input
  orderType1?: string | null; //구분1
  orderType2?: string | null; //구분2
  orderType3?: string | null; //구분3
  orderType4?: string | null; //구분4
  orderType5?: string | null; //구분5
  otherType?: string | null; //상세조건
}

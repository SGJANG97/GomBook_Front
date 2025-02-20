import { CommonModel } from 'src/models/common.model';

// FAQ
export interface Faq extends CommonModel {
  faqId?: string; //FAQ 아이디
  faqClassL?: string; //대분류 - 1차분류
  faqClassS?: string; //소분류 - 2차분류
  faqTitle?: string; //FAQ 제목
  contents?: string; //내용
  fixYn?: string; //고정여부 - TOP 10
  fixseq?: string; //고정순서 - TOP 10
  dispYn?: string; //게시상태
}

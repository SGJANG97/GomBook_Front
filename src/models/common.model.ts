export interface CommonModel {
  createUserId?: string; //최초생성자ID
  createUserName?: string; //최초생성자
  createDt?: string; //최초생성일
  lastUpdateUserId?: string; //최종수정자ID
  lastUpdateUserName?: string; //최종수정자
  lastUpdateDt?: string; //최종수정일
}

//초기화
export const defaultInitialCommonModel: CommonModel = {
  createUserId: '', //최초생성자ID
  createUserName: '', //최초생성자
  createDt: '', //최초생성일
  lastUpdateUserId: '', //최종수정자ID
  lastUpdateUserName: '', //최종수정자
  lastUpdateDt: '', //최종수정일
};

export interface CommonModel {
  createUserId?: string; //최초생성자ID
  createUserName?: string; //최초생성자
  createDt?: string; //최초생성일
  updateUserId?: string; //최종수정자ID
  updateUserName?: string; //최종수정자
  updateDt?: string; //최종수정일
}

//초기화
export const defaultInitialCommonModel: CommonModel = {
  createUserId: '', //최초생성자ID
  createUserName: '', //최초생성자
  createDt: '', //최초생성일
  updateUserId: '', //최종수정자ID
  updateUserName: '', //최종수정자
  updateDt: '', //최종수정일
};

//파일 정보
export interface FileInfo {
  fileId?: string; //파일 ID
  fileName?: string; //파일 명
  filePath?: string; //파일 경로
  fileSize?: number; //파일 사이즈(byte)
  fileSeq?: number; //파일 순번
  fileExt?: string; //파일 확장자
  categoryId?: string; //파일 카테고리 ID
  mainYn?: string; //메인 여부(Y, N)
  mobileYn?: string; //모바일 여부(Y, N)
  files?: File;
}

//파일 정보 base64
export interface FileInfoBase64 {
  id?: string; //파일 ID
  name?: string; //파일 명
  size?: number; //파일 사이즈(byte)
  seq?: number; //파일 순번
  ext?: string; //파일 확장자
  categoryId?: string; //파일 카테고리 ID
  mainYn?: string; //메인 여부(Y, N)
  mobileYn?: string; //모바일 여부(Y, N)
  files?: string;
}

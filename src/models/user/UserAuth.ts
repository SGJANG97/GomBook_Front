//token정보
export interface UserAuth {
  id?: string;
  userName?: string;
  loginStayYn?: string; //로그인 유지 여부
  exp?: number;
  iat?: number;
}

// export interface AdminUser {
//   id?: string;
//   userName?: string;
//   type?: string;
//   exp?: number;
//   iat?: number;
// }

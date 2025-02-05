// axios.ts
import axios from 'axios';
import { getLocalStorage } from 'src/utils/localStorage';

// const apiUrl = 'http://localhost:1234'; //`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`; // 환경 변수 가져오기
const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API}`; // 환경 변수 가져오기

// Axios 인스턴스 생성/내보내기
export const apiClient = axios.create({
  baseURL: apiUrl, // 기본 URL 설정
  timeout: 30000, // 요청 타임아웃 설정 (30초)
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    if (!['login'].includes(config.url || '')) {
      // storage 구분
      const storageName = config.url?.startsWith('/admin')
        ? 'adminAuth'
        : config.url?.startsWith('/delivery')
          ? 'deliveryAuth'
          : 'userAuth';
      const auth = getLocalStorage(storageName);

      if (auth) {
        config.headers.Authorization = `Bearer ${auth}`; // 인증 헤더 추가
      }
    }
    return config;
  },
  (error) => {
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정 - 에러처리
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터에서 code와 body를 구조 분해 할당
    // const result = response.data;
    // return { code, body }; // code와 body를 반환
    return response.data;
  },
  (error) => {
    // 에러 처리
    if (error.response) {
      // 서버가 응답했지만 2xx 범위를 벗어난 상태 코드
      console.error('API 요청 중 에러 발생:', error.response.data);
      const data = error.response.data;
      // 여기서 필요한 에러 메시지를 반환하거나 처리할 수 있습니다.
      return { code: data.status || data.code, body: data.error || data.body };
      // return error.response.data; // 에러 데이터를 거부
    } else if (error.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      console.error('서버 응답 없음:', error.request);
      return { code: 500, body: '서버 응답 없음' };
    } else {
      // 오류를 발생시킨 요청 설정
      console.error('요청 설정 오류:', error.message);
      return { code: error.status, body: error.message };
    }
  }
);

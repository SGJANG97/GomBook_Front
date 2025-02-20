import { apiClient } from './axiosInstance';
import { ResponseModel } from 'src/models/response.model';

// GET 요청 함수
export const APIGet = async <T>(
  url: string,
  params?: any
): Promise<ResponseModel<T>> => {
  return await apiClient.get(url, { params }); // 응답 데이터 반환
};
// POST 요청 함수
export const APIPost = async <T>(
  url: string,
  params?: any
): Promise<ResponseModel<T>> => {
  return await apiClient.post(url, params); // 응답 데이터 반환
};
// POST 요청 함수(파일 포함)
export const APIPostFiles = async <T>(
  url: string,
  params?: any
): Promise<ResponseModel<T>> => {
  return await apiClient.post(url, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }); // 응답 데이터 반환
};
// PUT 요청 함수
export const APIPut = async <T>(
  url: string,
  params?: any
): Promise<ResponseModel<T>> => {
  return await apiClient.put(url, params); // 응답 데이터 반환
};
// DELETE 요청 함수
export const APIDelete = async <T>(
  url: string,
  params?: any
): Promise<ResponseModel<T>> => {
  return await apiClient.delete(url, params); // 응답 데이터 반환
};

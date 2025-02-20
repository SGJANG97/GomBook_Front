export interface ResponseModel<T> {
  code: number;
  body: T | any;
  message?: string;
}

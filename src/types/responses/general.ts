export default interface ResultResponse<T> {
  isSuccess: boolean;
  error: string;
  errors?: string[];
  data?: T;
}

export interface ResponseBody<T> {
  status: number;
  message: string;
  messages?: string[];
  data: T;
}
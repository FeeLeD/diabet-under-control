import { AxiosResponse } from "axios";

export interface ResponseError extends AxiosResponse {
  data: Array<{
    code: string;
    description: string;
  }>;
}

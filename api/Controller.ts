import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Controller {
  protected async post<T, K>(
    url: string,
    data?: K,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const res: AxiosResponse = await axios.post(url, data, config);
      return res.data as T;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  }

  protected async get<T>(url: string, parameters?: object): Promise<T> {
    try {
      const res: AxiosResponse = await axios.get(url, { params: parameters });
      return res.data as T;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  }

  protected async put<T, K>(
    url: string,
    data?: K,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const res: AxiosResponse = await axios.put(url, data, config);
      return res.data as T;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  }

  protected async delete<T>(url: string): Promise<T> {
    try {
      const res: AxiosResponse = await axios.delete(url);
      return res.data as T;
    } catch (error) {
      throw (error as AxiosError).response;
    }
  }
}

import interceptor from "./InterceptorManager";
import request from "./dispatchRequest";

export interface AxiosRequestConfig extends RequestInit {}

export default class Axif {
  constructor(instanceConfig: object) {}

  async request(url: string, config: AxiosRequestConfig) {
    await request(url, config);
  }
}

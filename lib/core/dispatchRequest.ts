
import { AxiosRequestConfig } from './axif'

export default function (url: string, config: AxiosRequestConfig) {
  return fetch(url, config);
}

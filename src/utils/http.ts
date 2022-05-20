// import axios from 'axios'
// const defaultConfig = {
//   timeout: 5000,
//   baseUrl: ''
// }
// const axiosInstace = axios.create(defaultConfig)
// // 请求拦截
// axiosInstace.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// // 响应拦截
// axiosInstace.interceptors.response.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


// function httpget(url, params) {
//   return axiosInstace.get(url, params).then(res => res.data)
// }
// function httppost(url, data) {
//   return axiosInstace.post(url, data).then(res => res.data)
// }
// export default {
//   httpget,
//   httppost
// }

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}
class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  private static axiosInstace = axios.create(defaultConfig)
  private httpInterceptorsRequest() {
    Http.axiosInstace.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

  }
  private httpInterceptorsResponse() {
    Http.axiosInstace.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )

  }

  public httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstace.get(url, params).then(res => res.data)
  }
  public httpPost<T>(url: string, data: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstace.post(url, data).then(res => res.data)
  }
}


export const http = new Http()
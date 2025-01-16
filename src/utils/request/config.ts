import { AxiosResponse, InternalAxiosRequestConfig } from './types'
import Cookies from 'js-cookie'

const defaultRequestInterceptors = (config: InternalAxiosRequestConfig) => {
  if (
    config.method === 'post' &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    config.data = JSON.stringify(config.data)
  }

  config.headers['authorization'] = Cookies.get('management-token')

  if (config.method === 'get' && config.params) {
    let url = config.url as string
    url += '?'
    const keys = Object.keys(config.params)
    for (const key of keys) {
      if (config.params[key] !== void 0 && config.params[key] !== null) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`
      }
    }
    url = url.substring(0, url.length - 1)
    config.params = {}
    config.url = url
  }
  return config
}

const defaultResponseInterceptors = (response: AxiosResponse) => {
  if (response?.config?.responseType === 'blob') {
    // 如果是文件流，直接过
    return response
  } else if (response.status == 200) {
    if (response.data.code == 200) {
      return response.data.data
    } else {
      if (response.data.code == 401 || response.data.code == 402) {
      }
    }
  } else {
    if (response?.data?.code === 401) {
    }
  }
}

export { defaultResponseInterceptors, defaultRequestInterceptors }

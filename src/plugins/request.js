import axios from 'axios';

export default class Request {
  constructor ({ baseURL, timeout = 60000 * 3, withCredentials = false, errorHook = () => {} }) {
    this.config = {
      baseURL,
      timeout,
      withCredentials
    };
    this.instance = axios.create(this.config);
    // 请求错误钩子，可以在外面注册错误回调处理
    this.errorHook = errorHook;
    // 安装拦截器
    this.interceptors();
    return this.instance;
  }

  // 拦截器
  interceptors (instance = this.instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        // 请求失败
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        const { data } = response;
        return Promise.resolve(data);
      },
      error => {
        this.errorHook(error.response);
        return Promise.reject(error.response);
      }
    );
  }

  static get (...args) {
    return axios.get(...args);
  }
}

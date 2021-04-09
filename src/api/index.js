import Request from '@/plugins/request';

// 错误处理
const errorHook = response => {
  console.log(response);
};

const instanceMap = {
  base: null
};

// 注册实例
export const initInstance = data => {
  const { baseApi } = data;
  const baseRequest = new Request({
    baseURL: baseApi,
    withCredentials: true,
    errorHook
  });
  instanceMap.base = baseRequest;
};

const getRequest = (instance, url, serviceName = '未知接口', options = {}) =>
  new Promise((resolve, reject) => {
    instance({ url, method: 'get', ...options })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        console.error(`get请求---${serviceName}---接口失败`);
      });
  });

const postRequest = (instance, url, serviceName = '未知接口', params = {}, options = {}) =>
  new Promise((resolve, reject) => {
    instance({ url, method: 'post', data: params, ...options })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        console.error(`post请求---${serviceName}---接口失败`);
      });
  });

const putRequest = (instance, url, serviceName = '未知接口', params = {}, options = {}) =>
  new Promise((resolve, reject) => {
    instance({ url, method: 'put', data: params, ...options })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        console.error(`put请求---${serviceName}---接口失败`);
      });
  });

const deleteRequest = (instance, url, serviceName = '未知接口', params = {}, options = {}) =>
  new Promise((resolve, reject) => {
    instance({ url, method: 'delete', data: params, ...options })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        console.error(`请求---${serviceName}---接口失败`);
      });
  });

export const JGET = async (url, serviceName) => {
  try {
    const res = await Request.get(url, {
      // 阻止 axios 自动 JSON.parse
      // refer https://github.com/axios/axios/issues/907
      transformResponse: undefined,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error(`请求---${serviceName}---失败`);
  }
};

export const GET = (url, serviceName, options) =>
  getRequest(instanceMap.base, url, serviceName, options);

export const POST = (url, serviceName, params, options) =>
  postRequest(instanceMap.base, url, serviceName, params, options);

export const PUT = (url, serviceName, params, options) =>
  putRequest(instanceMap.base, url, serviceName, params, options);

export const DELETE = (url, serviceName, params, options) =>
  deleteRequest(instanceMap.base, url, serviceName, params, options);

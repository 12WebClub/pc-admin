import {
  Message,
} from 'element-ui';

import axios from 'axios';
import config from './../config';

const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'));

const instance = axios.create({
  baseURL: config.apiHopst,
  params: {
    session_id: userinfo ? userinfo.session_id : null,
  },
});

// 添加请求拦截器
axios.interceptors.request.use(res => res, error =>
  // 对请求错误做些什么
  Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.info.status_code !== 200) {
    // console.log(response);
    if (response.data.info.status_code === 204) {
      Message({
        type: 'error',
        message: '登录过期，请重新登录',
      });
      location.href = '/#/login';
    }
  }
  return response;
}, error =>
  // 对响应错误做点什么
  Promise.reject(error),
);

export default instance;

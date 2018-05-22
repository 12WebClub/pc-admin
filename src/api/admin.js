import api from './index';

const path = {
  // 登录
  login: '/psuser/login',
  // 注销
  logout: '/psuser/logout',
  user: '/users',
};

const login = (form) => api.post(path.login, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = '';
    for(let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }]
})

const logout = () => api.get(path.logout);

const getUser = () => api.get(path.user);

export default {
  login,
  logout,
  getUser,
};

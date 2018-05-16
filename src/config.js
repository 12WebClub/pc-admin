/**
 * config
 * create by lqy 2018/3/26
 */

let apiHopst = `${location.protocol}//${location.host}/api/`;

if (process.env.NODE_ENV === 'development') {
  console.log('开发');
} else {
  console.log('生产');
  // 1apiHopst = 'http://ps.stosz.com/';
  apiHopst = 'http://192.168.105.112:8081';
  console.log(apiHopst);
}

export default {
  apiHopst,
};

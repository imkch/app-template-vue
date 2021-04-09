import { JGET } from './';

const getAppInfo = () => JGET('conf/app.json', '获取应用信息');

export default {
  getAppInfo
};

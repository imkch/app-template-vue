import Vue from 'vue';

import { Rate } from 'view-design';
import 'view-design/dist/styles/iview.css';

const viewDesignComponentMap = {
  'Rate': Rate
};

// 按需加载view design组件
Object.keys(viewDesignComponentMap).forEach(key => {
  Vue.component(key, viewDesignComponentMap[key]);
});

// 检索目录下的模块
const req = require.context('.', true, /\.vue$/);

req.keys().forEach(filePath => {
  const componentConfig = req(filePath);
  const name = filePath.split('/')[1];
  Vue.component(name, componentConfig.default || componentConfig);
});

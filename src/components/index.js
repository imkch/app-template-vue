import Vue from 'vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

// 检索目录下的模块
const req = require.context('.', true, /\.vue$/);

req.keys().forEach(filePath => {
  const componentConfig = req(filePath);
  const name = filePath.split('/')[1];
  Vue.component(name, componentConfig.default || componentConfig);
});

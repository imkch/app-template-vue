# app-template-vue

基于VUE 2.x搭建的应用基础模板，开箱即用。
## 特征

- view-design组件库按需加载
- tailwindcss自定义样式库
- svg图标
- gzip压缩打包文件
- jest单元测试
- 自定义GIT提交规范
- ESLint代码规范检查
- SCSS样式预处理器
- PostCSS样式转换处理器
- 定义文件命名规范
- API Request封装

## 运行
```bash
// 下载依赖
yarn

// 开发环境启动
yarn serve

// 单元测试
yarn test:unit

// 代码格式化
yarn lint

// 生产环境打包
yarn build

// git提交
yarn commit
```

## 目录结构


```
├── public
│   ├── img                         # 默认icon
│   ├── conf                        # 配置项
│   ├── favicon.ico                 # favicon图标
│   ├── index.html                  # 主页面
│   └── robots.txt                  # 网站跟爬虫的协议
├── src
│   ├── api                         # api
│   ├── assets                      # 静态文件
│   ├── components                  # 公共组件
│   ├── plugins                     # 公共插件
│   ├── router                      # 路由表管理
│   ├── store                       # vuex
│   ├── styles                      # 全局scss变量、样式
│   ├── svgs                        # svg图标
│   ├── utils                       # 通用工具函数
│   ├── views                       # 页面视图
│   ├── App.vue                     # Vue根组件
│   ├── main.js                     # 项目入口文件
│   ├── register-service-worker.js  # 注册后台线程,处理离线缓存
├── tests                           # 单元测试
├── .browserslistrc                 # 浏览器兼容性配置
├── .commitlinttrc                  # commit lint规则
├── .cz-config                      # commit提交配置
├── .editorconfig                   # 编码配置
├── .eslintrc                       # eslint规则
├── .gitignore                      # git提交黑名单
├── babel.config.js                 # babel
├── jest.config.js                  # jest配置
├── package.json                    # package管理
├── postcss.config.js               # postcss配置
├── README.md
├── tailwind.config.js              # tailwind配置
├── vue.config.js                   # 工程配置文件
└── yarn.lock                       # 依赖版本锁定
```

## 规范约束

### 项目命名
统一使用`kebab-case`风格命名。
### 文件及文件夹命名
统一使用`kebab-case`风格命名；文件夹下默认文件使用index命名(index.vue、index.js)。

### 路由命名
path采用`kebab-case`方式；name采用`kebab-case`方式。


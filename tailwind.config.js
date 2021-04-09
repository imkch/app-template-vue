module.exports = {
  // 启用深色模式，由系统浏览器控制
  darkMode: 'media',
  // 删除未使用的css
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // 响应设置
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024) { ... }

      xl: '1440px'
      // => @media (min-width: 1440px) { ... }
    }
  },
  variants: {},
  // 支持自定义类名及类内容详见 https://www.tailwindcss.cn/docs/plugins
  plugins: [],
  // 可以在此关闭你不想使用的类
  corePlugins: {}
};

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 14,
      minPixelValue: 3,
      propList: ['*'],
      unitPrecision: 2
    },
    tailwindcss: {},
    autoprefixer: {}
  }
};

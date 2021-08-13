/* config-overrides.js */
const path = require('path')
const { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra')

/* config-overrides.js */
module.exports = override(
  // 设置别名路径
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  // ...其他配置...
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/assets/scss/global.scss" //这里是你自己放公共scss变量的路径
        }
      });
    }
  })
)

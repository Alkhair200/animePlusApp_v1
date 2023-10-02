const { defineConfig } = require("@vue/cli-service");
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack:{
    
    performance: {
      hints: false
    },    
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
});

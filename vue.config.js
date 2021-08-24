module.exports = {
  publicPath: '/social-proof-section/',
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/main.scss";`
        },
      }
    }
  }
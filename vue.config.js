module.exports = {
  css: { sourceMap: true },
  productionSourceMap: true,
  pwa: {
    workboxOptions: {
      exclude: [/\.gitkeep/],
      skipWaiting: true,
      clientsClaim: true
    },
    name: 'picboard',
    themeColor: '#000',
    msTileColor: '#000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#000'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/picboard/'
    : '/'
}
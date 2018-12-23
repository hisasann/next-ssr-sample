module.exports = {
  useFileSystemPublicRoutes: false,
  exportPathMap: async function (defaultPathMap) {
    return {
      // ここでカスタムな routing を頑張ろうとしたが、うまく動かず、 server.js でやることに。
      // '/(c|d)-:a/(e|f)-:b/*': { page: '/parent-child' },
      // '/about/:id': { page: '/about', query: { id: ':id' } }
    }
  }
}
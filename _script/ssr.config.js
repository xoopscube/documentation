module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    basePath: 'https://xoopscube.github.io/',
    alias: {
      '/fr-fr/changelog': '/changelog',
      '/ja-jp/changelog': '/changelog',
      '/changelog': 'https://raw.githubusercontent.com/xoopscube/xcl/master/CHANGELOG.md'
    },
    auto2top: true,
    coverpage: true,
    executeScript: true,
    loadSidebar: true,
    loadNavbar: true,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    name: 'xcodex',
    search: {
      noData: {
        '/fr-fr/': 'Aucun résultat!',
        '/ja-jp/': '結果なし',
        '/': 'No results!'
      },
      paths: 'auto',
      placeholder: {
        '/fr-fr/': 'Rechercher',
        '/ja-jp/': '検索する',
        '/': 'Search'
      }
    }
  }
}

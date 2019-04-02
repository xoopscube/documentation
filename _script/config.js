// CDN Settings
window.$docsify = {
  el: '#app',
  // The name in the sidebar.
  name: 'xcodex',
  // The name of the link.
  // nameLink: '/',
  // The name link for each route.
  nameLink: {
    '/fr/': '/fr/home.md',
    '/ja/': '/ja/home.md',
    '/': '/'
  },
  // Logo in the sidebar, can be resized by CSS.
  logo: '/_media/logo.png',
  // Base path of the website. You can set it to another directory or another domain name.
  basePath: '/documentation/',
  // Load the files from another site.
  // basePath: 'https://xoopscube.github.io/documentation/',
  // Load files from other repo.
  // basePath:
  // 'https://raw.githubusercontent.com/xoopscube/documentation/gh-pages/',
  // repo: 'username/repo',
  // repo: 'https://github.com/xoopscube/documentation',
  // README.md in your docs folder will be treated as homepage for your website,
  // but sometimes you may need to serve another file as your homepage.
  // Change to /home.md.
  homepage: 'home.md',
  // Or use the readme in your repo.
  // homepage:
  // 'https://raw.githubusercontent.com/xoopscube/documentation/master/README.md',
  // Activate the cover feature. If true, it will load from _coverpage.md.
  // coverpage: true,
  // Activate custom file name.
  // coverpage: 'cover.md',
  // Activate mutiple covers and custom file name.
  coverpage: {
    '/fr/': '_coverpage-fr.md',
    '/ja/': '_coverpage-ja.md',
    '/': '_coverpage.md'
  },
  // Theme custom style.
  themeable: {
    readyTransition: true,
    responsiveTables: true // default 'true'
  },
  // Activate only coverpage to load when visiting the home page.
  onlyCover: true,
  // Loads navbar from the Markdown file _navbar.md if true.
  loadNavbar: false,
  // or else from the path specified.
  // loadNavbar: 'nav.md',
  // Loads sidebar from the Markdown file _sidebar.md if true.
  loadSidebar: true,
  // or else from the path specified.
  // loadSidebar: 'summary.md',
  // Automatic header title to the page from the sidebar link.
  autoHeader: true,
  // Maximum Table of content level. Default: 6.
  maxLevel: 5,
  // Add table of contents (TOC) in custom sidebar.
  subMaxLevel: 5,
  // Scrolls to the top of the screen when the route is changed.
  auto2top: true,
  // Date format
  formatUpdated: '{MM}/{DD} {HH}:{mm}',
  // Markdown configuration.
  // https://github.com/markedjs/marked
  // You can customize how it renders your Markdown content to HTML.
  // https://marked.js.org/#/USING_ADVANCED.md
  // Mermaid graph object
  markdown: {
    renderer: {
      code: function (code, lang) {
        if (lang === "mermaid") {
          return ('<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + "</div>");
        }
        return this.origin.code.apply(this, arguments);
      }
    }
  },
  // Tabs
  tabs: {
    persist: true,
    sync: true,
    theme: 'classic',
    tabComments: true,
    tabHeadings: true // default 'true', 
    // standard markdown Heading levels 1-6 are supported (e.g. # - ######) 
    // as are both asteriscks (**) and underscores (__) for bold text via markdown.
  },
  // Copy-code (defaults)
  copyCode: {
    buttonText: {
      '/fr/': 'Copier le code',
      '/ja/': '点击复制',
      '/': 'Copy to clipboard'
    },
    errorText: {
      '/fr/': 'erreur',
      '/ja/': '错误',
      '/': 'Error'
    },
    successText: {
      '/fr/': 'Copié',
      '/ja/': '复制',
      '/': 'Copied'
    }
  },
  // Pagination
  pagination: {
    // previousText: '上一章节',
    // nextText: '下一章节',
    previousText: 'Previous',
    nextText: 'Next',
  },
  plugins: [
    EditOnGithubPlugin.create('https://raw.githubusercontent.com/xoopscube/documentation/master/'),
    function (hook) {
      var footer = [
        // '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/xoopscube" target="_blank">XOOPS CUBE Project</a> &copy;2019</span>',
        ' - <span>Web Application Platform <a href="https://github.com/xoopscube/xcl" target="_blank">XCL</a> - <span> User Interface <a href="https://github.com/xoopscube/xoopscube.github.io" target="_blank">Prototype</span>',
        '</footer>'
      ].join('');
      hook.afterEach(function (html) {
        return html + footer;
      });
    }
  ],
  search: {
    // Localization
    noData: {
      '/fr/': 'Aucun résultat',
      '/ja/': '結果が見つかりません',
      '/': 'No results!'
    },
    paths: 'auto',
    placeholder: {
      '/fr/': 'Rechercher',
      '/ja/': '検索する',
      '/': 'Search'
    }
  },
};

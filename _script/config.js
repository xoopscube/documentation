// CDN Settings
window.$docsify = {
  el: '#app',
  // The name in the sidebar.
  name: 'xcodex',
  // Logo in the sidebar, can be resized by CSS.
  logo: '/_media/logo.png',
  // Base path of the website. 
  // 1. You can set it to another directory or another domain name.
  // basePath: '/documentation/',
  // 2. Load the files from another site.
  // basePath: 'https://xoopscube.github.io/documentation/',
  // 3. Load files from other repo.
  // basePath:
  // 'https://raw.githubusercontent.com/xoopscube/documentation/master/',
  // The name of the link.
  // nameLink: '/',
  // The name link for each route.
  nameLink: {
    '/en/': '#/en/',
    '/fr/': '#/fr/',
    '/': '/'
  },
  // Loads navbar from the Markdown file _navbar.md if true.
  loadNavbar: true,
  // or else from the path specified.
  // loadNavbar: 'nav.md',
  // Navbar merged with the sidebar on smaller screens.
  mergeNavbar: true,
  // Loads sidebar from the Markdown file _sidebar.md if true.
  loadSidebar: true,
  // or else from the path specified.
  // loadSidebar: 'summary.md',
  alias: {
    // '/.*/_navbar.md': '/_navbar.md',
    '/en/.*/_navbar.md': '/en/_navbar.md',
    '/en/.*/_sidebar.md': '/en/_sidebar.md',
    '/en/(.*)': '/en/$1',
    '/fr/.*/_navbar.md': '/fr/_sidebar.md',
    '/fr/.*/_sidebar.md': '/fr/_sidebar.md',
    '/fr/(.*)': '/fr/$1',
  },
    // Automatic header title to the page from the sidebar link.
    autoHeader: true,
    // Maximum Table of content level. Default: 6.
    maxLevel: 4,
    // Add table of contents (TOC) in custom sidebar.
    subMaxLevel: 3,
    // Scrolls to the top of the screen when the route is changed.
    auto2top: true,
  // GitHub Corner icon 
  // 1. repo: 'username/repo',
  // 2. repo: 'https://github.com/xoopscube/documentation',
  // Default homepage index
  // is the docs folder README.md (uppercase).
  // Serve another file as your homepage.
  // 1. Change to /home.md.
  // homepage: 'home.md',
  // 2. Or use the readme in your repo.
  // homepage:
  // 'https://raw.githubusercontent.com/xoopscube/documentation/master/README.md',
  // Activate the cover feature.
  // 1. If true, it will load from _coverpage.md.
  // coverpage: true,
  // 2. Activate custom file name.
  // coverpage: 'cover.md',
  // 3. Activate mutiple covers and custom file name.
  coverpage: {
    '/fr/': '_coverpage-fr.md',
    '/': '_coverpage.md'
  },
  // Activate only coverpage to load when visiting the home page.
  onlyCover: true,

  // Custom 404
  notFoundPage: {
    '/en': '/en/_404.md',
    '/fr': '/fr/_404.md'
  },

  // Theme custom style.
  themeable: {
    readyTransition: true,
    responsiveTables: true // default 'true'
  },
   // Execute the script on the page. Only parse the first script tag. If Vue is present, it is 'true' by default.
   executeScript: true,
  // Date format
  // display the file update date through {docsify-updated} variable.
  formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}',
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
    sync: false, // default 'true',
    theme: 'classic',
    tabComments: true,
    tabHeadings: true // default 'true', 
    // standard markdown Heading levels 1-6 are supported (e.g. # - ######) 
    // as are both asterisks (**) and underscores (__) for bold text via markdown.
  },
  // Copy-code (defaults)
  copyCode: {
    buttonText: {
      '/en/': 'Copy to clipboard',
      '/fr/': 'Copier le code',
    },
    errorText: {
      '/en/': 'Error',
      '/fr/': 'erreur'
    },
    successText: {
      '/en/': 'Copied',
      '/fr/': 'Copié'
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
    EditOnGithubPlugin.create('https://github.com/xoopscube/documentation/blob/master/'),
    function (hook) {
      var footer = [
        // '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/xoopscube" target="_blank">The XOOPSCUBE Project</a> &copy;2025</span>',
        ' - <span>Web Application Platform <a href="https://github.com/xoopscube/legacy" target="_blank">XCL Bundle Package</a>',
        '</footer>'
      ].join('');
      hook.afterEach(function (html) {
        return html + footer;
      });
    },

  ],
  search: {
    // Localization
    noData: {
      '/en/': 'No results!',
      '/fr/': 'Aucun résultat!',
    },
    paths: 'auto',
    placeholder: {
      '/en/': 'Search',
      '/fr/': 'Rechercher',
    }
  },
};

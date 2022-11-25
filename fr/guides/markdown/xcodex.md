
## X-Codex

The script converts a folder structure of markdown files to HTML to upload and edit the result to the repository documentation.

Templates are easy to identify. The folder or file name starts with _underscore

+ _coverpage.md
+ _navbar.md
+ _sidebar.md

## Folder structure

```md
root-directory
├── _media
│   ├── *.gif
│   ├── *.jpg
│   ├── *.png
│   └── *.svg
├── _script
│   ├── *.css
│   └── *.js
├── delivery
│   ├── _sidebar.md
│   ├── home.md
│   └── readme.md
├── development
│   ├── _sidebar.md
│   ├── home.md
│   ├── readme.md
│   └── core
│       ├── module.md
│       ├── preload.md
│       └── theme.md
├── index.html
├── home.md
├── _coverpage.md
├── _navbar.md
└── _sidebar.md
```

## readyTransition

- Type: `boolean`
- Default: `true`

Determines if a loading indicator will be displayed while waiting for the site to initialize, followed by a fade transition after initialization is complete.

**Example**

```javascript
  // ...
  themeable: {
    readyTransition: true // default
  }
```

## responsiveTables

- Type: `boolean`
- Default: `true`

Determines if `<table>` elements will be displayed as responsive tables on smaller screens.

When `true`, the `<table>` layout will be adjusted on smaller screens, allowing table data to flow vertically instead of horizontally. This prevents users from having to scroll horizontally, making the table data easier to read. When `false`, `<table>` elements will be displayed as they are on larger screens, with a horizontal scrollbar if necessary.

**Example**

```javascript
  // ...
  themeable: {
    responsiveTables: true // default
  }
```
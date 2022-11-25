<dl>
  <dt>X-Codex converts a folder structure of markdown files to HTML with a link to edit on the Github repository.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Why Markdown</summary>

- Markdown Guide
- Basics
- Examples

</details>

<details>
<summary style="cursor: pointer;">Plugins</summary>

- Mermaid
- Prism
- Search
- Tabs

</details>

<details>
<summary style="cursor: pointer;">Folder Structure</summary>

- media
- script
- development
- guidelines
- delivery

</details>

<details>
<summary style="cursor: pointer;">Docs Templates</summary>

- Cover page
- Navbar
- Sidebar
- 404

</details>

-----

### Why Markdown?

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

_"The overriding design goal for Markdown's formatting syntax is to make it as readable as possible. The idea is that a
Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags
or formatting instructions."_

### Markdown Guide
-----

Ready to start writing?  Either start changing stuff or read more about.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

### Basics
-----

### Examples
-----

### Plugins
-----
### gitGraph

```mermaid
gitGraph:
options
{
    "nodeSpacing": 100,template: "metro",
    "nodeRadius": 10,
    "orientation" : vertical
}
end
commit
branch module
checkout module
commit "test"
commit
branch feature
checkout feature
checkout master
commit
merge feature
commit
merge module
```
    
### Folder Structure
-----

+ [English docs website](https://xoopscube.github.io/documentation/ 'X-Codex English')
+ [Japanese docs website](https://xoopscube.github.io/documentation/#/ja/ 'X-Codex Japanese')


Templates
----
Templates are easy to identify. The folder name or the file name starts with _underscore

+ _coverpage.md
+ _navbar.md
+ _sidebar.md

### Templates
-----


## Headings

<!-- tabs:start -->

#### ** Rendered **

# Heading 1 {docsify-ignore}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus
nulla eu ex varius, a varius elit tincidunt. Aenean arcu magna, gravida id purus
a, interdum convallis turpis. Aenean id ipsum eu tortor sollicitudin scelerisque
in quis elit.

## Heading 2 {docsify-ignore}

Vestibulum lobortis laoreet nunc vel vulputate. In et augue non lectus
pellentesque molestie et ac justo. Sed sed turpis ut diam gravida sagittis nec
at neque. Vivamus id tellus est. Nam ac dignissim mi. Vestibulum nec sem
convallis, condimentum augue at, commodo diam.

### Heading 3 {docsify-ignore}

Suspendisse sit amet tincidunt nibh, ac interdum velit. Ut orci diam, dignissim
at enim sit amet, placerat rutrum magna. Mauris consectetur nibh eget sem
feugiat, sit amet congue quam laoreet. Curabitur sed massa metus.

#### Heading 4 {docsify-ignore}

Donec odio orci, facilisis ac vehicula in, vestibulum ut urna. Ut bibendum
ullamcorper risus, ac euismod leo maximus sed. In pulvinar sagittis rutrum.
Morbi quis cursus diam. Cras ac laoreet nulla, rhoncus sodales dui.

##### Heading 5 {docsify-ignore}

Commodo sit veniam nulla cillum labore ullamco aliquip quis. Consequat nulla
fugiat consequat ex duis proident. Adipisicing excepteur tempor exercitation ad.
Consectetur voluptate Lorem sint elit exercitation ullamco dolor.

###### Heading 6 {docsify-ignore}

Ipsum ea amet dolore mollit incididunt fugiat nulla laboris est sint voluptate.
Ex culpa id amet ipsum amet pariatur ipsum officia sit laborum irure ullamco
deserunt. Consequat qui tempor occaecat nostrud proident.

#### ** Markdown **

```markdown
# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus
nulla eu ex varius, a varius elit tincidunt. Aenean arcu magna, gravida id purus
a, interdum convallis turpis. Aenean id ipsum eu tortor sollicitudin scelerisque
in quis elit.

## Heading 2

Vestibulum lobortis laoreet nunc vel vulputate. In et augue non lectus
pellentesque molestie et ac justo. Sed sed turpis ut diam gravida sagittis nec
at neque. Vivamus id tellus est. Nam ac dignissim mi. Vestibulum nec sem
convallis, condimentum augue at, commodo diam.

### Heading 3

Suspendisse sit amet tincidunt nibh, ac interdum velit. Ut orci diam, dignissim
at enim sit amet, placerat rutrum magna. Mauris consectetur nibh eget sem
feugiat, sit amet congue quam laoreet. Curabitur sed massa metus.

#### Heading 4

Donec odio orci, facilisis ac vehicula in, vestibulum ut urna. Ut bibendum
ullamcorper risus, ac euismod leo maximus sed. In pulvinar sagittis rutrum.
Morbi quis cursus diam. Cras ac laoreet nulla, rhoncus sodales dui.

##### Heading 5

Commodo sit veniam nulla cillum labore ullamco aliquip quis. Consequat nulla
fugiat consequat ex duis proident. Adipisicing excepteur tempor exercitation ad.
Consectetur voluptate Lorem sint elit exercitation ullamco dolor.

###### Heading 6

Ipsum ea amet dolore mollit incididunt fugiat nulla laboris est sint voluptate.
Ex culpa id amet ipsum amet pariatur ipsum officia sit laborum irure ullamco
deserunt. Consequat qui tempor occaecat nostrud proident.
```

<!-- tabs:end -->

## Text

<!-- tabs:start -->

#### ** Rendered **

Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>Preformatted text</pre>

<small>Small Text</small>

This is <sub>subscript</sub>

This is <sup>superscript</sup>

#### ** Markdown **

```markdown
Body text

**Bold text**

*Italic text*

~~Strikethrough~~

<mark>Marked text</mark>

<pre>Preformatted text</pre>

<small>Small Text</small>

This is <sub>subscript</sub>

This is <sup>superscript</sup>
```

<!-- tabs:end -->

## Links

<!-- tabs:start -->

#### ** Rendered **

[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com

#### ** Markdown **

```markdown
[Inline link](https://google.com)

[Inline link with title](https://google.com "Google")

[Reference link by name][link1]

[Reference link by number][1]

[Reference link by self]

[link1]: https://google.com
[1]: https://google.com
[Reference link by self]: https://google.com
```

<!-- tabs:end -->

## Lists

<!-- tabs:start -->

#### ** Rendered **

**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3

#### ** Markdown **

```markdown
**Ordered Lists**

1. Ordered 1
1. Ordered 2
   1. Ordered 2a
   1. Ordered 2b
   1. Ordered 2c
1. Ordered 3

**Unordered Lists**

- Unordered 1
- Unordered 2
  - Unordered 2a
  - Unordered 2b
  - Unordered 2c
- Unordered 3

**Task Lists**

- [x] Task 1
- [ ] Task 2
  - [x] Subtask A
  - [ ] Subtask B
- [ ] Task 3
```

<!-- tabs:end -->


## Blockquotes

<!-- tabs:start -->

#### ** Rendered **

> Cras aliquet nulla quis metus tincidunt, sed placerat enim cursus. Etiam
> turpis nisl, posuere eu condimentum ut, interdum a risus. Sed non luctus mi.
> Quisque malesuada risus sit amet tortor aliquet, a posuere ex iaculis. Vivamus
> ultrices enim dui, eleifend porttitor elit aliquet sed.
>
> *- Quote Source*

#### ** Markdown **

```markdown
> Cras aliquet nulla quis metus tincidunt, sed placerat enim cursus. Etiam
> turpis nisl, posuere eu condimentum ut, interdum a risus. Sed non luctus mi.
> Quisque malesuada risus sit amet tortor aliquet, a posuere ex iaculis. Vivamus
> ultrices enim dui, eleifend porttitor elit aliquet sed.
>
> *- Quote Source*
```

<!-- tabs:end -->


## Code

<!-- tabs:start -->

#### ** Rendered **

This is `inline code`

```javascript
const add   = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
    <p>Hello</p>
</body>
```

#### ** Markdown **

````markdown
This is `inline code`

```javascript
const add   = (num1, num2) => num1 + num2;
const total = add(1, 2);

console.log(total); // 3
```

```html
<body>
    <p>Hello</p>
</body>
```
````

<!-- tabs:end -->


## Custom CSS and HTML

More advanced styling can be applied by leveraging the CSS class names and data attributes associated with tab containers, toggles, labels, and content blocks.

<!-- tabs:start -->

#### **Basic Tab**

**HTML**

```html
<button class="docsify-tabs__tab" data-tab="basic tab">Basic Tab</button>
<div class="docsify-tabs__content" data-tab-content="basic tab">
  ...
</div>
```

When the tab is active, note the addition of the `docsify-tabs__tab--active` class:

```html
<button class="docsify-tabs__tab docsify-tabs__tab--active" data-tab="basic tab">Basic Tab</button>
```

#### **Active State**

**HTML**

```html
<button class="docsify-tabs__tab docsify-tabs__tab--active" data-tab="active state">Active State</button>
<div class="docsify-tabs__content" data-tab-content="active state">
  ...
</div>
```

**Custom CSS**

```css
.docsify-tabs__tab--active[data-tab="active state"] {
  box-shadow: none;
  background: #13547a;
  color: white;
}
.docsify-tabs__content[data-tab-content="active state"] {
  background-image: linear-gradient(0deg, #80d0c7 0%, #13547a 100%);
}
.docsify-tabs__content[data-tab-content="active state"] p strong {
  color: white;
}
```

#### **CodePen**

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="result" data-user="iopensource" data-slug-hash="xxqjRzP" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 1px solid; margin: 0; padding: 0;" data-pen-title="PureCSS - ScrollBar Hover">
  <span>See the Pen <a href="https://codepen.io/iopensource/pen/xxqjRzP">
  PureCSS - ScrollBar Hover</a> by Info Opensource (<a href="https://codepen.io/iopensource">@iopensource</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



**HTML**

```html
<button class="docsify-tabs__tab docsify-tabs__tab--active" data-tab="codepen">CodePen</button>
<div class="docsify-tabs__content" data-tab-content="codepen">
  ...
</div>
```

**Custom CSS**

```css
[data-tab-content="codepen"] .cp_embed_wrapper {
  position: relative;
  top: calc(0px - var(--docsifytabs-content-padding));
  left: calc(0px - var(--docsifytabs-content-padding));
  width: calc(100% + calc(var(--docsifytabs-content-padding) * 2));
  margin-bottom: calc(0px - var(--docsifytabs-content-padding));
}
```

#### **Badge**

**Tab Markdown**

```markdown
#### **Badge**
```

**Custom CSS**

```css
[data-tab="badge"]:after {
  content: 'New!';
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -45%);
  padding: 0.25em 0.35em;
  border-radius: 3px;
  background: red;
  color: white;
  font-family: sans-serif;
  font-size: 11px;
  font-weight: bold;
}
```

<!-- tabs:end -->



## Notices

<!-- tabs:start -->

#### ** Rendered **

!> **Important** notice with `inline code` and additional placeholder text used
to force the content to wrap and span multiple lines.

?> **Tip** notice with `inline code` and additional placeholder text used to
force the content to wrap and span multiple lines.

#### ** Markdown **

```markdown
!> **Important** notice with `inline code` and additional placeholder text used
to force the content to wrap and span multiple lines.

?> **Tip** notice with `inline code` and additional placeholder text used to
force the content to wrap and span multiple lines.
```

<!-- tabs:end -->

## Tabs

Tabs provided via the
[docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs) plugin.

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

#### ** Markdown **

```markdown
<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->
```

<!-- tabs:end -->

## Tables

<!-- tabs:start -->

#### ** Rendered **

| Left Align | Center Align | Right Align | Non&#8209;Breaking&nbsp;Header |
| ---------- |:------------:| -----------:| ------------------------------ |
| A1         | A2           | A3          | A4                             |
| B1         | B2           | B3          | B4                             |
| C1         | C2           | C3          | C4                             |

#### ** Markdown **

```markdown
| Left Align | Center Align | Right Align | Non&#8209;Breaking&nbsp;Header |
| ---------- |:------------:| -----------:| ------------------------------ |
| A1         | A2           | A3          | A4                             |
| B1         | B2           | B3          | B4                             |
| C1         | C2           | C3          | C4                             |
```

<!-- tabs:end -->

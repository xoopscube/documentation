### X-Codex

The script converts a folder structure of markdown files to HTML with a link to edit the mardown files on the Github repository.


+ [English docs website](https://xoopscube.github.io/documentation/ 'X-Codex English')
+ [Japanese docs website](https://xoopscube.github.io/documentation/#/ja/ 'X-Codex Japanese')


![X-Codex](https://github.com/xoopscube/documentation/blob/master/_media/xcl-codemo-screenshot.png "XCL Documentation")


Templates
----
Templates are easy to identify. The folder name or the file name starts with _underscore

+ _coverpage.md
+ _navbar.md
+ _sidebar.md

### <span class="iconify" data-icon="fa-brands:markdown"></span>Why Markdown?

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff or read more about.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

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
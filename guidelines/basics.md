
### Why Markdown?

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

## Markdown parser

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

### HTML

<p>paragraph</p>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>

```html
<p>paragraph</p>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
```

### Markdown Notice : Alert

!> **Life** is a game! Learn the rules to play and have fun.

```md
!> **Life** is a game! Learn the rules to play and have fun.
```

### Markdown Notice : Attention

?> _TODO_ unit test

```md
?> _TODO_ unit test
```

### Tab Comments

<!-- tabs:start -->

<!-- tab:English -->

Hello!

<!-- tab:French -->

Bonjour!

<!-- tab:Italian -->

Ciao!

<!-- tabs:end -->

### Tabs custom sty

With icons and icons+label


### Image

**Inline**

![alt text](//source.unsplash.com/collection/181581 "Provided by unsplash.com")

```md
![alt text](//source.unsplash.com/collection/181581 "Provided by unsplash.com")
```
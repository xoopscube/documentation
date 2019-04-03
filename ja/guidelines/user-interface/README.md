Style guidelines define the visual expression of an organization that it presents to the world. Every organization has its own style guide which they use to build logos, colors, icons and typography.


#### Template Engine

XCL uses by default the _Smarty Template Engine_. The philosophy of Smarty design was driven by these goals:

+ clean separation of presentation from application code
+ PHP backend, Smarty template frontend
+ complement PHP, not replace it
+ fast development/deployment for programmers and designers
+ quick and easy to maintain
+ syntax easy to understand, no PHP knowledge required
+ flexibility for custom development
+ security: insulation from PHP
+ free, open source 

#### What is Smarty?

Smarty is a template engine for PHP, facilitating the separation of presentation (HTML/CSS) from application logic. This implies that PHP code is application logic, and is separated from the presentation.

When it comes to templating in PHP, there are basically two camps of thought. The first camp exclaims that "PHP is a template engine". This approach simply mixes PHP code with HTML. Although this approach is fast from a pure script-execution point-of-view, many would argue that the PHP syntax is messy and difficult to maintain when mixed with presentation. PHP works well for programming, but not so well for templating.

The second camp exclaims that presentation should be void of all programming code, and instead use simple tags to indicate where application content is revealed. This approach is common with other template engines (and other programming languages), and is the approach that Smarty takes. The idea is to keep the templates focused squarely on presentation, void of application code, and with as little overhead as possible.

#### Theme & Templates

The main **Themes** typically contain pre-made **modules templates** that are easy to edit and to design, since the view is separated from the logic, they are based on HTML5 and CSS3 technology combined with a CSS framework. Simple HTML5 and CSS3 with some Javascript and smarty variables. In fact, designers and developers can simple collaborate to create great apps.

#### Customization 

The smarty render theming allows you to fully customize your app. XCL uses one Theme with a set of templates for the frontend and admin Theme with its set of templates for backend. The Themes are like containers including multiple templates composed by various components.

#### Personalization

XCL renders content and features to specific characteristics of users, so that different visitors see different things on the “same” page.  It depends on your goals and implementation. Personalization is done by the XCL module User settings to identify users and deliver to them the content, experience, or functionality that matches their role. Personalization can be done down at the individual level or at group or audience level (e.g., an intranet displaying information specific to those in a certain location or a certain role, such as a job function).

XCL can easily assign a different Theme to different users or set a different theme for each of your site's sections or topics. 

Ref. learn more : [How to Use Multiple Themes] 

#### Module AltSys
Ref.
#### Module Cache
Ref.
#### Module CKEditor
Ref.
#### Module System
Ref.
#### Module Render
Ref.
#### Module Message
Ref.
#### Module Profile
Ref.
#### Module Protector
Ref.
#### Module User
Ref.
#### Module X-update
Ref.

#### Color scheme

Theme color scheme.

#### Components

These guidelines provide specs and usage of UI components that display on interface and a user interacts with them.

UI components include standard controls like input controls, windows, dialogs, panels, menus, views, scrollbars, buttons and many other similar items.

**Navigation**

XCL Navigation enables users to move through an app.

**Search**

XCL Search allows users to quickly find app content

#### Patterns

Reusable design patterns are included in UI guidelines. These patterns define behavior for certain controls.

Few examples are navigation, search, forms, data formats, states, and pagination.

#### XCL Icons

Icons used by XCL.

#### Set of icons

ref. link

### Typography

Textual guidelines cover tone and style of text to be used on UI. Text should be understandable for different cultures and audience.

Text specs like font size, color, and style are part of these guidelines. Text displays on UI as fields, labels, messages, and information for user.

#### System Fonts

What are those system fonts? At the time of this writing, it breaks down as follows:

<table style='margin: 0px'>
<thead style="box-sizing: border-box;">
<tr style="background: rgb(51, 51, 52);">
<th>OS</th>
<th>Version</th>
<th>System Font</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mac OS X</td>
<td>El Capitan</td>
<td>

[San Francisco](https://github.com/supermarin/YosemiteSanFranciscoFont)
</td>
</tr>
<tr>
<td>Mac OS X</td>
<td>Yosemite</td>
<td>

[Helvetica Neue](https://www.myfonts.com/fonts/linotype/neue-helvetica/)
</td>
</tr>
<tr>

<td>Mac OS X</td>
<td>Mavericks</td>
<td>

[Lucida Grande](https://en.wikipedia.org/wiki/Lucida_Grande)
</td>
</tr>
<tr>
<td>Windows</td>
<td>Vista</td>
<td>

[Segoe UI](http://www.microsoft.com/typography/Fonts/family.aspx?FID=331)
</td>
</tr>
<tr>
<td>Windows</td>
<td>XP</td>
<td>

[Tahoma](http://www.microsoft.com/typography/fonts/family.aspx?FID=19)
</td>
</tr>
<tr>
<td>Windows</td>
<td>3.1 to ME</td>
<td>

[Microsoft Sans Serif](http://www.microsoft.com/typography/fonts/family.aspx?FID=244)</td>
</tr>
<tr>
<td>Android</td>
<td>Ice Cream Sandwich (4.0)+</td>
<td>

[Roboto](https://fonts.google.com/specimen/Roboto)</td>
</tr>
<tr>
<td>Android</td>
<td>
Cupcake (1.5) to Honeycomb (3.2.6)</td>
<td>

[Droid Sans](https://fonts.google.com/specimen/Droid+Sans)</td>
</tr>
<tr>
<td>Ubuntu</td>
<td>All versions</td>
<td>

[Ubuntu](http://font.ubuntu.com/)</td>
</tr>
</tbody>
</table>

GitHub uses one simple method applying system fonts on the body element:

```css
/* System Fonts as used by GitHub */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Other popuplar websites use a similar approach with support for [Oxygen Sans](https://fonts.google.com/specimen/Oxygen) (created for the GNU+Linux operating system) and [Cantarell](https://en.wikipedia.org/wiki/Cantarell_(typeface)) (created for the [GNOME](https://en.wikipedia.org/wiki/GNOME) operating system).

```css
/* System Fonts as used by Medium and WordPress */
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}
```

!> **Note** : This method should only be used on the font-family property instead of the font shorthand. 

The limitation of the first method is that you have to call the full stack of fonts each time it's used on an element.

Jonathan Neal offers an alternative method where system fonts are declared using @font-face.

```css
/* Define the "system" font family */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

/* Now, let's apply it on an element */
body {
  font-family: "system";
}
```
!> _Note_ that Jonathan's full example illustrates the capability to define variations of the system font family that was defined in the snippet above to account for italics, bolding, and additional weights.

The new GitHub font stack has a handful of system fonts, plus some extras as fallback and emoji. Developers love their emoji like anyone else—maybe more.

```css
/* Define the "system" font family */
@font-face {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
 Helvetica, Arial, sans-serif,
 "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
 }

/* Now, let's apply it on an element */
body {
  font-family: "system";
}
```

From Mark Otto, Senior Director of Design at GitHub and creator of Bootstrap. 

Article : http://markdotto.com/2018/02/07/github-system-fonts/
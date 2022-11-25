<dl>
  <dt>The X-Codex Documentation provides information about Style Guide.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators, developers and designers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Design Integration</summary>

- Framework Agnostic
- Theme and Templates
- Frontend Theme Design
- Admin Theme Design
- Theme & Templates
- Components
- Customization and personalization
- Single File Component : Preload - add-on, extension, plugin
- Folder Structure
- Modules Templates

</details>

-----

A well-documented design system can play a huge part in success of any major design project. There are many systems with pro's and con's. Design systems include Component-Based Systems and Atomic Design.

### Component-Based

Component-based systems are based on components or modules: re-usable chunks of code that are intended for multiple uses. It allows you to modify a module once and see it updated in every instance; have a more clear app architecture and have a unified development process. There are two common approaches when designing a website: Frameworks and Style guides.

Frameworks are very common and have been around for a while. They include Bootstrap, Materialize and Foundation.

#### Pro's

- ready-to-use components
- saves tons of time and effort
- many fromwork styles are free and easy to find online

#### Con's
- not for designers - no .sketch, .psd or other source files
- deep customization requires a large amount of additional development effort and negates the very essence of a framework
- for every element there will be 5 that you don’t need that slows things down

Style guides are built from scratch, and you can quickly use components from it in your mock-ups

#### Pro's

- defines what styles to use and when
- reduces questions about when a component should be used
- not everything needs to be mocked up: ie a form page with error states

#### Con's
- it is difficult to trace the inheritance of components
- components often get implemented not in the intended way
- it can drastically decrease re-usability of your design components

### Atomic Design

Atomic design is a methodology that allows (and requires) you to describe and organize every component of your 
design system. This approach divides design components into 5 different categories.


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


<dl>
  <dt>The X-Codex Documentation provides information about Smarty Template Engine.</dt>
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

#### User Interface

- A **theme** is a collection of files (html, css, javascript) with Smarty Template Engine _Variables_ and _Constants_ that are assigned from PHP (core, module or preload). 
- Regardless of your experience level, it's relatively easy to create, install and edit a theme or customize modules templates.   
- Technically, a simple theme only requires four files : manifesto.ini.php, screenshot.png, style.css, theme.html 
- Backend and frontend themes can be created with popular CSS frameworks to easily implement user-friendly UIs  
- Style guidelines define the visual expression of an organization that it presents to the world. Every organization has its own style guide which they use to build logos, colors, icons and typography. 

#### Render Engine

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

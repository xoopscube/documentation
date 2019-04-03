

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

#### UI Customization 

The smarty render theming allows you to fully customize your app. XCL uses one Theme with a set of templates for the frontend and admin Theme with its set of templates for backend. The Themes are like containers including multiple templates composed by various components.

#### UI Personalization

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




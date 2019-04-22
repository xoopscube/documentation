<dl>
  <dt>The X-Codex Documentation provides information about how to install, configure, deploy and use XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators, developers and designers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Overview</summary>

- Cube, the minilamistic core 
- Requiremments
- Versions
- Features
- What's New

</details>

<details>
<summary style="cursor: pointer;">Installation Guide</summary>

- [Server Requirements](/en/development/installation#requirements) and default PHP Extensions.
- [Quick Start](/en/development/installation#quick-start) fundamentals of the folder structure and the installation wizard.
- [Apache Settings](/en/development/installation#apache-settings) recommended for performance.
- [Nginx Settings](/en/development/installation#nginx-settings) tunning for performance.
- [Free SSL Certificate](/en/development/installation#free-ssl-certificate) get a free SSL certificate in minutes.
- [Download](/en/development/installation#download) zip archive or clone the git repository.
- [Upgrading](/en/development/installation#upgrade) to the latest release.

</details>

<details>
<summary style="cursor: pointer;">Administration Guide</summary>

- XCL Web Application Platform
- Fundamentals of Content Management System
- Basics of setting up XCL
- Modules management
- User Managements permissions
- customizing XCL.

</details>

<details>
<summary style="cursor: pointer;">User Guide</summary>

- Setting Up XCL.
- Working with profile custom fields
- Filemanager and CKEditor
- Modules and blocks
- Themes and templates.

</details>

<details>
<summary style="cursor: pointer;">Reference</summary>

- Cube Core Design Patterns
- Delegate and Preload mechanism, single file extension 
- Abstract
- Interface
- evelopment of modules

</details>

<details>
<summary style="cursor: pointer;">Troubleshooting</summary>

- Administering XCL
- Checking the Version and Build Number
- General Best Practices
- Troubleshooting Progression

</details>

<details>
<summary style="cursor: pointer;">Knowledge base</summary>

- Solutions to Common Problems
- Resetting a Lost Password
- Fixing Files Permissions
- Users Mail Job
- Cache Management and Performance
- Common Tools
- Installing from Repositories

</details>

-----

!> Note ! There are a number of topics that aren’t written yet. That means you can contribute to making this guide better.

### XOOPS Cube Ecosystem

XOOPS Cube is designed with an intuitive graphical user interface to make it easy to build and manage web sites. It is both a Content Management System (CMS) and a Web Application Platform (WAP). At the core is XCube — a platform/layer giving Required Minimum Functionality to create a custom web application or to aggregate preexistent CMS (eg. blog Wordpress, Wiki, etc).

**XOOPS Cube and Legacy**

The XOOPS Cube functions of the legacy XOOPS System have been placed into their own modules, such as user account management and private messages. With XOOPS Cube you can develop your own template engine or run the Legacy render (e.g. Smarty). The minimalist core of XOOPS Cube offers the required minimum functionality. XOOPS and XOOPS Cube are therefore very different from each other.

**XCube is the Core Layer** to the Base Module(s). The underlying logic of the core main classes which the project team narrowed down the "**Core program**", is a simple design concept "**No Framework**". So web developers and designers can run their favorite frameworks and libraries within Cube.

The first versions of XOOPS, like other Nuke derivatives such as PHP-Nuke, were labeled as (CMS), that can be extended with modules. Webmaster can add or change some functions or install modules. Though it is less flexible when webmasters need to customize authentication functions or personalize web accessibility.

**Base modules**

Developers can create a new base module or a sub-class, and release a new package. They are free to publish their distribution package with their modules and themes. All language files and all bundled modules and themes are updated to the latest version with X-Update Store. They can develop base modules to make XCube interact with different CMS(s), to run any existent or new CMS. There are other base modules on the way to be built, as explained by Minahito in the XC Wiki. 

**Legacy**

With XCube, web developers are able to choose from many different CMS systems. This Legacy base module is one of them. XOOPS Cube Project released Legacy before XCube 1.00 was completed by Minahito as the first XCube major version. Therefore, Legacy implements many features to emulate Xoops v2. So the Base system Legacy is an exception, made only to ensure backwards compatibility.

Moreover, such software design was needed to develop a modular architecture with the concept free choice of frameworks. The XCube core is the platform on that you can install one 'base' module. And, a 'base' module implements the features of a CMS. One base module is "Legacy" which ensures backward compatibility with XOOPS2. Another base module example is Xpress to run Wordpress. If anyone aims to implement new features, it can be done with a custom base module running on XCube platform, aside initial Legacy.

XCL is one base set of modules released as a package by the project team to be simple, secure and scalable — 3S.

**The 3S concept**

The XOOPS Cube concept "3S" — Simple, Secure and Scalable. XCube is a very minimalist and simple core because it is a platform used to create a CMS environment. In addition, XCube has some policies and features to ensure security. One of these policies is TYPE-SAFE emulator. Another one is Action-Form that always check and detect valid values like peripheral driver. Lastly, XCube is really scalable. Leverage both the XCube general modularity and specific design of concepts and principles to a development strategy (for a software company), where over time a project leverages its architecture and platform to new multi-platform market applications, each one of which requires not only new standard modules, but also customization and personalisation.

**Borrowed ideas**

XOOPS Cube was completed by borrowing ideas from traditional mechanisms outside the web. Mechanisms such as preloading, delegates, task systems, generic render-sequence came from .NET, video game programing and scene graph to implement an ideal spec for XOOPS Cube.

**Development**

In Cube, most things are handled as re-usable materials. Managers, ADD-ONs (modules), Preloads and Themes are materials for end-users. Delegates, Virtual Services and Tasks of the Task System(*) are materials for programmers. A Preload can be a single-file extension. It is the minimalistic ADD-ON for customization and personalization of a website. Webmasters do not need to change the source code.

**Configuration**

Cube is configured by writing an INI file. Cube consists of a set of several managers. Each manager provides careful management of its members and a consistent API. Developers can choose from managers, modules, and add preload files for flexible and extensible customizing. In addition, some distribution packages have been released. Those packages already have good starting INI file, a set of base modules and provide preload files for a rapid site development. A web developer can run a preconfigured website or package as the starting point that will be bundled into the production bundle.

**Exchangable**

The Cube design is probably common to the most used design pattern in modern programming languages like Java and C#. Some of the advantages of Cube design are: inheritance, as object creation is delegated to subclasses, it promotes consistency, classes are made to be polymorphic, thus interchangeable. With Cube you can choose to write more type-safe code than before. Since most objects are exchangable, it's possible to change the layer (BASE), not only managers. The BASE can be replaced or written from scratch. Anyone can develop anything, anytime, anywhere, except changing the core that makes everything "exchangable" allowing for scalability, flexiblity and freedom.

**Virtual service**

XOOPS Cube provides a server/client model for site communication and module communication. The virtual service abstracts the actual program, so the client can connect with a module and from another site. XOOPS Cube can connect with the website service and can provide the service to other websites.

**Multi render-system**

XOOPS Cube doesn't have fixed spec of themes. The Generic Render-Sequence tries to render the final output switching render-systems. This allows a custom website design with a your favorite framework.

**Tools**

XOOPS Cube is simple and recommended to be used as a tool for automatic complex work. 
+ Manifesto is a special file document for tools that work automatically with XOOPS Cube. 
+ Cubson is a code generator for Legacy BASE and works with extoolsD.dll

**Related projects**

+ Custom Legacy was planned by Tom's company. That's light-weight Legacy. Maybe source code will be developd from scratch, and it will lose some compatibilities. Tom said that this base module aims to D3 modules. Not sure whether it is front controller type. The licence should be GPL, because it uses some parts of Legacy.

+ Oreteki Legacy was planned by Marijuana who made Oreteki-XOOPS before.

+ Non-DB base was planned by Ryuji. But, this is just idea, so it's uncertain whether he plan to develop or not. It is special light-weight base module to run special modules which don't use DB. And, by XCube_Service or other methods, these modules are attached to Legacy through Legacy's module adapter.

+ Onokazu's Framework is a new framework developed by Onokazu to be an independent PHP application. But, the modules developed with this framework will be attached to XOOPS Cube through the specific base module or the specific adapter.

+ XUGJ/Hoda-juku Distribution is a package which includes some modules and some specific configurations : a "right out of the box" distro. The distribution was planned by XUGJ or Hoda-Juku. Because GIJOE is a member of them, the distribution will include his great work which is also available as moules. [http://hodajuku.sourceforge.net/]

+ Momoxo
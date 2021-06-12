<dl>
  <dt>The X-Codex Documentation provides information about how to install, configure, deploy and use XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators, developers and designers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Overview</summary>

- What is XCL? The XCube core simple, secure and scalable.
- Why XCL?
- What XCL Does
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


#### Overview

- What is XCL? The XCube core simple, secure and scalable.
- Why XCL?
- What XCL Does
- Features
- What's New

### What is XCL?

**XCL** is a bundle package designed with an intuitive graphical user interface. Among the main features XCL bundle integrates a filemanager with cloud support and a wysiwyg content editor with granular permissions. Additionally, site admins can easily extend the app project with dynamic features installed and managed with a single click and run from X-Update. 

XCL is both a Content Management System (CMS) and a Web Application Platform (WAP). A simple solution to benefit from PHP7 performance and high level of security, a scalable architecture and continuous delivery for site owners while maintaining full control over their own data. 

![Admin Modules](/../../_media/xcl-admin-modules.png "XCL Admin Modules")
_XCL 2.3.0 GUI Protoype_

### Why XCube Core?

The XCube core concept "3S" stands for — Simple, Secure and Scalable.  
Its foundational design concept covers the free choice of frameworks and libraries. 

**XCube** is the core platform/layer giving required minimum functionality to create a custom web application or to aggregate preexistent CMS (eg. blog, ecommerce, gallery, forum, blog, Wordpress, Wiki, etc), frameworks and libraries (eg. Angular, React, Vue, etc.). 

The new application core implements concepts of object-oriented programming, design patterns and real-time 3D rendering. The XCube core was developed from scratch by Kazuhisa Minato (lead programmer in the game industry). The **Core Layer** to Base Module(s). The underlying logic of the core main classes which the project team narrowed down the "**Core program**", is a simple design concept "**No Framework**". So web developers and designers can run their favorite frameworks and libraries within XCube.The minimalist core of XCube offers the required minimum functionality. 

**Legacy System** is a base set of modules by developers with strong programming skills and high experimented designers to ensure backwards compatibility and interoperability with XOOPS the older legacy system. The main functions of Base Legacy have been placed into their own modules, such as user account management and private messages.

**Package Legacy**

With XCube, web developers are able to choose from many different CMS systems. Legacy is one of them. XOOPS Cube Project released Legacy before XCube 1.00 was completed by Minahito as the first XCube major version. Therefore, Legacy implements many features to emulate Xoops v2. So the Base system Legacy is an exception, made only to ensure backwards compatibility.

Moreover, such software design was needed to develop a modular architecture with the concept free choice of frameworks. The XCube core is the platform on that you can install one 'base' module. And, a 'base' module implements the features of a CMS. One base module is "Legacy" which ensures backward compatibility with XOOPS2. Another base module example is Xpress to run Wordpress. If anyone aims to implement new features, it can be done with a custom base module running on XCube platform, aside initial Legacy.

**XOOPS** is an acronym of "eXtensible Object Oriented Portal System". Though started as a portal system, it later developed into a web application framework. It aims to serve as a web framework for use by small, medium and large sites. The first versions of XOOPS, like other Nuke derivatives such as PHP-Nuke, were labeled as (CMS), that can be extended with modules. Webmaster can add or change some functions or install modules. Though it is less flexible when webmasters need to customize authentication functions or personalize web accessibility.

**Renderer** is a simple but smarty theme and template engineof XCube. The concepts and design decisions for the development of the rendering engine were influenced by the excellent concept of exchangeable features implemented by 3D software (eg. OGRE3D, or Object-Oriented Graphics Rendering Engine). 

These projects have been around since 2001 and the senior developers and designers have experimented almost every development situation. 

**Base modules**

Developers can create a new base module or a sub-class, and release a new package. They are free to publish their distribution package with their modules and themes. All language files and all bundled modules and themes are updated to the latest version with X-Update Store. They can develop base modules to make XCube interact with different CMS(s), to run any existent or new CMS. There are other base modules on the way to be built, as explained by Minahito in the XC Wiki. 

### XCube Architecture

XCube design borrows ideas from traditional mechanisms outside the web. Mechanisms such as preloading, delegates, task systems, generic render-sequence from .NET, video game programing and scene graph to implement an ideal specification.

XCube handles most things as re-usable materials. Managers, ADD-ONs (modules), Preloads and Themes are materials for end-users. Delegates, Virtual Services and Tasks of the Task System(*) are materials for developers. A Preload is a single-file extension, a minimalistic ADD-ON for customization and personalization of a website, so Webmasters don't have to change the source code.

At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful and simple. The core architecture was designed to build dynamic web sites, web applications and web services. Among other things, XCube has some policies and features to ensure security. One of these policies is the safe type-safe emulation. Another one is Action-Form that always check and identify valid values like a peripheral driver interface. Lastly, XCube is really scalable. 

XCube aims to leverage both the general modularity and specific design of concepts and principles to a development strategy (for a software company), where over time a project leverages its architecture and platform to new multi-platform market applications, each one of which requires not only new standard modules, but also customization and personalisation.

### XCube Development

Developers always start from the root to use some feature. Most of features are delegated to managers.  
The singleton design pattern is one of the twenty-three well-known "Gang of Four" design patterns that describe how to solve recurring design problems to design flexible and reusable object-oriented software,  
that is, objects that are easier to implement, change, test, and reuse.

Why is such mechanism needed? Because It's a must have for flexibility. But, XCube also benefit from another effect of this mechanism. In the 3D application world, there are many "controversies" around the question of the best process. For example, the scene management has multiple solutions — Octree, Quadtree, Terrain, Sphere tree, no tree and more... but all these controversies are useless, because the best process is determined by what the application has to do.

A web application has commonly the same "controversies" about required features. XCube delegates them to managers and controllers. So developers are free to change them according to their needs. XCube starts up managers from the configuration settings written into the file _default.ini_ or the simple override file _custom.ini_

**Configuration**

Cube is configured by writing an INI file. Cube consists of several managers. Each manager provides careful management of its members and a consistent API. Developers can choose from managers, modules, and add preload files for flexible and extensible customizing. In addition, some distribution packages have been released. Those packages already have good starting INI file, a set of base modules and provide preload files for a rapid site development. A web developer can run a preconfigured website or package as the starting point that will be bundled into the production bundle.

### XCube Namespace

XCube used a prefix convention to implement the concept of namespace when PHP didn't provide any.  
PHP namespaces were introduced in PHP 5.3, and subsequently updated.

In the PHP world, namespaces are designed to solve two problems that authors of libraries and applications encounter when creating re-usable code elements such as classes or functions: Name collisions between code you create, and internal PHP classes/functions/constants or third-party classes/functions/constants.

**Exchangable**

The Cube design is probably common to the most used design pattern in modern programming languages like Java and C#. Some of the advantages of Cube design are: inheritance, as object creation is delegated to subclasses, it promotes consistency, classes are made to be polymorphic, thus interchangeable. With Cube you can choose to write more type-safe code than before. Since most objects are exchangable, it's possible to change the layer (BASE), not only managers. The BASE can be replaced or written from scratch. Anyone can develop anything, anytime, anywhere, except changing the core that makes everything "exchangable" allowing for scalability, flexiblity and freedom.

**Virtual service**

XOOPS Cube provides a server/client model for site communication and module communication. The virtual service abstracts the actual program, so the client can connect with a module and from another site. XOOPS Cube can connect with the website service and can provide the service to other websites.



### XCube Render Engine

XCube defines the render-system class as an interface which renders output html data from various template-formats. XCube core handles render buffer instances as output data. The Render system writes the html data. 

Common render systems are registered in the Root. However, it's not a good solution if the render system is only used by a single module. So a custom render system shouldn't need to be registered to the root. instead the render system should be a sub-class of the XCube layer. If the class doesn't depend on modules, it can be re-used. This mechanism means that XCube doesn't enforce a template format nor impose any to developers and designers. With XCube you can develop your own template engine or run the smarty render.

+ Module developers can develop their own render system.
+ Designers can plan new themes formats.

**Multi render-system**

XOOPS Cube doesn't have fixed spec of themes. The Generic Render-Sequence tries to render the final output switching render-systems. This allows a custom website design with a your favorite framework.

## XCube Tools

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
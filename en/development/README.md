<dl>
  <dt>The X-Codex Documentation provides information about how to install, configure, deploy and use XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators, developers and designers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Overview</summary>

- [What is XCL?](#what-is-xcl) — CMS and Web Application Platform.
- [Why XCube core?](/en/development/readme#why-xcube-core) — Xcube Core concept and subsystems.
- [XCube Architecture](#xcube-architecture) — Simple, Secure and Scalable.
- [XCube Development](#xcube-development) — design patterns, delegate managers and controllers.
- [XCube Namespace](#xcube-namespace) — concepts implemented when PHP didn’t provide any.
- [Exchangable](#exchangable) — inheritance, OOP polymorphism and type-safe code.
- [Virtual Service](#virtual-service)
- [Render Engine](#render-engine)
- [Multi-render system](#multi-render)
- [D3 Duplicable Modules](#duplicable-modules)
- [XCube Tools](#xcube-tools)

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
- Development of modules

</details>

<details>
<summary style="cursor: pointer;">Troubleshooting</summary>

- Administration Control Panel
- Update Manager Dashboard
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

### What is XCL?

**XOOPSCube Legacy** (XCL) is a free and open-source Web Application Platform (WAP) empowering site owners to build, manage and deploy scalable web applications, custom Content Management System (CMS), forums, community discussion board and knowledge management systems, or multiple blogs (e.g. WordPress).

The XCL bundle package is designed for easy usage and to benefit from the performance of the most popular web server stack: Apache, MySQL and PHP.

XCL 2.3.0 introduces support for PHP 7.2.+  
Installation Wizard and GUI improvements.  

The latest version includes the XCube Core system and the Legacy subsystem   
thus preserving backwards compatibility while ensuring the complementary   
concept of forward compatibility.  

#### Editor and File manager  

The WYSIWYG CKEditor and elFinder file manager make a robust user-fiendly  
content management with graphic and code editors and capabilities to mount  
remote storage.  

#### Deployment and Update management

X-Update manager is the default package manager for installing new modules,  
preloads (add-ons, extensions, single file components) and new themes.  

Up-to-date versions for most packages available in the repository.  
Ability to support multiple instances of the same package.  

#### Framework Agnostic  

Support for new CSS and JavaScript frameworks (compiled reactjs, vue, fluent, etc).


#### PHP 7   

PHP 7 is an enhanced version of PHP 5 that offers faster performance.  
While PHP 5 coding is much simpler than traditional coding, PHP 7.++   
provides developers with an improved coding system.  
The enhanced PHP 7 engine is considered a next-generation design. 

> Many PHP applications are still running on PHP 5.x  
Many third party developers have not taken the plunge  
due to concerns about compatibility issues, migration   
issues and the odd and awkward feeling that will  
take up a lot of their time. 

---

### XCube Core Concept

The XCube core concept "3S" stands for — Simple, Secure and Scalable.  
Its foundational design concept covers the free choice of frameworks and libraries. 

**XCube** is the core layer of the platform giving required minimum functionality to aggregate preexistent subsystems, for example, a custom CMS, ecommerce platform, gallery, forum, multiple Wordpress, Wiki, etc.

The XCube core was developed from scratch by Kazuhisa Minato (lead programmer in the game industry), addressing the challenges of software development for current and future parallel hardware architectures which are now dominated by multicore architectures. Thus implementing a task-oriented program execution on multicore systems with backward compatibility and a complementary concept of forward compatibility. The XCube concept mediates between existing computing resources and applications on the one hand, and the high-level goals required for personalization at scale on the other. 

In a slide deck (wiki), Kazuhisa Minato depicts the developed architecture to support these new capabilities. The key features of the new architecture are the ability to interface with existing applications, while adding considerable support for tasks; the ability to incorporate other subsystems so that the platform adapts over time; and the ability to cope with resource variability and mobility. He also described some of the software engineering challenges that arise in this context.

![Core implementation](https://github.com/xoopscube/artwork-social-media/blob/master/images/xcl_dia_render_base.jpg) 

* Self-initialization
* Drive mechanism
* Rendering sequence

The new XCube core implements programming concepts of object-oriented, design patterns and real-time 3D rendering. The underlying logic of the core main classes which the project team narrowed down the "**Core program**" is built on a simple design concept "**No Framework**". Moreover, such software design was needed to develop a task-base modular architecture allowing web developers and designers to run their favorite frameworks and libraries. If anyone aims to implement new features, it can be done with a custom subsystem running on XCube platform, aside initial XCL bundle package.

**XCL Bundle Package** is a base subsystem, or set of modules. With XCube, web developers are able to choose from different CMS. Legacy is one of them. The XOOPSCube Team released Legacy before XCube 1.0 was completed by Minahito as the first XCube major version. Therefore, Legacy implements many features to emulate Xoops v2. So the Base system Legacy is an exception, made by highly skilled developers and high experimented designers to ensure backwards compatibility and interoperability with the XOOPS2 (©2002 Kazumi Ono @Onokazu, GPL2) and later XOOPS2-JP Japanese versions with multibyte character support. Base Legacy main functions have been placed into their own modules, such as user account management and private messages.

**XOOPS2** is an acronym of "eXtensible Object Oriented Portal System". Though started as a portal system, it later developed into a web application framework. It aims to serve as a web framework for small, medium and large sites. The first versions of XOOPS, like other Nuke derivatives such as PHP-Nuke, were labeled as (CMS), that can be extended with modules. Webmaster can add or change some functions or install modules. Though it is less flexible when webmasters need to customize authentication functions or personalize web accessibility.

**Renderer** is a simple but smarty render engine. The concepts and design decisions for the development of the rendering engine were influenced by the excellent concept of exchangeable features implemented by 3D software (e.g. OGRE3D, or Object-Oriented Graphics Rendering Engine). 

These projects have been around since 2001 and the senior developers and designers have experimented almost every development situation. They know how to design and how to develop robust applications with the right tools, frameworks and libraries to efficiently overcome obstacles. It takes time and practice to build up genuine expertise.

### XCube Architecture

XCube design borrows ideas from traditional mechanisms outside the web. Mechanisms such as preloading, delegates, task systems, generic render-sequence from .NET, video game programing and scene graph to implement an ideal specification.

XCube handles most things as re-usable materials, managers, add-ons (modules), preloads (extensions) and Themes are materials for end-users.    
Delegates, Virtual Services and Tasks of the Task System(*) are materials for developers.     
A Preload is a single-file component, an extension for customization and personalization of a website, so Webmasters don't have to change the source code of the trusted system.

At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful and simple.  
The core architecture was designed to build dynamic web sites, web applications and web services. 

Among other things, XCube has some policies and features to ensure security.  
One of these policies is the safe type-safe emulation.  
Another one is Action-Form that always check and identify valid values like a peripheral driver interface.   
Lastly, XCube is really scalable.
Developers can create a new base subsystems, sub-class, or modules and release a new package.  
They are free to publish their distribution package with their modules and themes.  
All language files and all bundled modules and themes are updated to the latest version with X-Update Store.  
They can develop base modules to make XCube interact with different CMS(s), to run any existent or new CMS.  


XCube aims to leverage both the general modularity and specific design of concepts and principles to a development strategy (for a software company), where over time a project leverages its architecture and platform to new multi-platform market applications, each one of which requires not only new standard modules, but also customization and personalisation.

### XCube Development

Developers always start from the :root to use some feature.  
Most of features are delegated to managers.  
The singleton design pattern is one of the twenty-three well-known "Gang of Four" design patterns that describe how to solve recurring design problems to design flexible and reusable object-oriented software,  
that is, objects that are easier to implement, change, test, and reuse.

Why is such mechanism needed? Because It's a must have for flexibility.   
But, XCube also benefit from another effect of this mechanism.   
In the 3D application world, there are many "controversies" around the question of the best process.   
For example, the scene management has multiple solutions — Octree, Quadtree, Terrain, Sphere tree, no tree and more...   
but all these controversies are useless, because the best process is determined by what the application has to do.

A web application has commonly the same "controversies" about required features. XCube delegates them to managers and controllers.   
So developers are free to change them according to their needs. 

XCube starts up managers from the configuration settings written into the file _default.ini_ or the simple override file _custom.ini_

XCube consists of several managers and each manager provides careful management of its members and a consistent API. Developers can choose from managers, modules, delegate and preload mechanism or interfaces for extensible and flexible customization. Some distribution packages have been released with a good starting INI file, a set of base modules and provide preload files for a rapid site development. A web developer can run a preconfigured website or package as the starting point that will be bundled to meet production expectations.

### XCube Namespace

XCube used a prefix convention to implement the concept of namespace when PHP didn't provide any.  
PHP namespaces were introduced in PHP 5.3, and subsequently updated.

In the PHP world, namespaces are designed to solve two problems that authors of libraries and applications encounter when creating re-usable code elements such as classes or functions: Name collisions between code you create, and internal PHP classes/functions/constants or third-party classes/functions/constants.

### Exchangable

The XCube design is probably common to the most used design pattern in modern programming languages like Java and C#. Some of the advantages of XCube design are : inheritance, as object creation is delegated to subclasses, it promotes consistency, classes are made to be polymorphic, thus interchangeable; write more type-safe code than before; since most objects are exchangable, it's possible to change the layer (BASE), not only managers. The BASE can be replaced or written from scratch. Anyone can develop anything, anytime, anywhere, except changing the core that makes everything "exchangable" allowing for scalability, flexiblity and freedom.

### Virtual Service

XCube provides a server/client model for site communication and module communication. The virtual service abstracts the actual program, so the client can connect with a module and from another website. XCube can connect with the website service and can provide the service to other websites.


### Render Engine

XCube defines the render-system class as an interface which renders output html data from various template-formats. XCube core handles render buffer instances as output data. The Render system writes the html data. 

Common render systems are registered in the Root. However, it's not a good solution if the render system is only used by a single module. So a custom render system shouldn't need to be registered to the root. instead the render system should be a sub-class of the XCube layer. If the class doesn't depend on modules, it can be re-used. This mechanism means that XCube doesn't enforce a template format nor impose any to developers and designers. With XCube you can develop your own template engine or run the default smarty render.

+ Module developers can develop their own render system.
+ Designers can plan new themes formats.

### Multi-Render

XCube doesn't have a fixed specification for themes and templates. The Generic Render-Sequence tries to render the final output switching render-systems. This allows complete control over a finished custom designed with your favorite framework.

### Duplicable Modules

XCL can run many public instances of a single _duplicable module_ (D3) from the TRUST_PATH. The concept is to secure a duplicable module by moving all of the module’s PHP files out of web root or DOCUMENT_ROOT. The system architecture of D3 and Trust Path was implemented by GIJOE — developer of the most useful and frequently used modules like altsys, pico and protector. So far there is a module generator to take advantage of the system and most of Japanese developers release modules based on D3.

### XCube Tools

XCube is simple and recommended to be used as a tool for automatic complex work. 
+ Manifesto is a special file document for tools that work automatically with XCube. 
+ Cubson is a code generator for the Base Legacy and works with extoolsD.dll


**Related projects**

+ Custom Legacy was planned by Tom's company. That's light-weight Legacy. Maybe source code will be developd from scratch, and it will lose some compatibilities. Tom said that this base module aims to D3 modules. Not sure whether it is front controller type. The licence should be GPL, because it uses some parts of Legacy.

+ Oreteki Legacy was planned by Marijuana who made Oreteki-XOOPS before.

+ Non-DB base was planned by Ryuji. But, this is just idea, so it's uncertain whether he plan to develop or not. It is special light-weight base module to run special modules which don't use DB. And, by XCube_Service or other methods, these modules are attached to Legacy through Legacy's module adapter.

+ Onokazu's Framework is a new framework developed by Onokazu to be an independent PHP application. But, the modules developed with this framework will be attached to XOOPSCube through the specific base module or the specific adapter.

+ XUGJ/Hoda-juku Distribution is a package which includes some modules and some specific configurations : a "right out of the box" distro. The distribution was planned by XUGJ or Hoda-Juku. Because GIJOE is a member of them, the distribution will include his great work which is also available as moules. [http://hodajuku.sourceforge.net/]

+ Momoxo

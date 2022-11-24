<dl>
  <dt>The X-Codex Documentation provides information about how to install, configure, deploy and use XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences: This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Table of Contents</summary>

- [Overview](#overview) — Web Application Platform and Content Management System.
- [XCube core](#xcube-core-concept) — Xcube Core concept and subsystems.
- [XCube Architecture](#xcube-architecture) — Simple, Secure and Scalable.
- [XCube Development](#xcube-development) — design patterns, delegate managers and controllers.
- [XCube Namespace](#xcube-namespace) — concepts implemented when PHP didn’t provide any.
- [Exchangeable](#exchangeable) — inheritance, OOP polymorphism and type-safe code.
- [Virtual Service](#virtual-service)
- [Render Engine](#render-engine)
- [Multi-render system](#multi-render)
- [Trust Path](#trust-path)
- [D3 Duplicable Modules](#duplicable-modules)
- [XCube Tools](#xcube-tools)

</details>

<details>
<summary style="cursor: pointer;">API Reference</summary>

- Cube Core 
- Design Patterns
- Delegate and Preload mechanism 
- Single file extension 
- Abstract
- Interface
- Service
- Code generator module

</details>


-----

!> Note ! There are a number of topics that aren’t written yet. That means you can contribute to making this guide better.

### Overview

This page provides an overview of the original XCube design concept build with PHP and MySQL.
It is a brief summary of the initial architecture idea on which the design and eventual development 
of a subsystem is built.
Therefore, it is not an exhaustive API reference including all possible elements, classes, objects 
or detailed models, functions or methods.

Some subpackages and submodules mentioned in the documentation that contain certain public functions 
related to data types are public. However, the business logic, which includes services and code generators, 
is not always publicly available.

XOOPSCube Legacy (XCL) is a free and open-source Web Application Platform (WAP) empowering site owners to build, 
manage and deploy scalable web applications. 
The [XCL Bundle Package](./xcl-package.md) includes XCube core, the subsystem Legacy and modules to customize a 
Content Management System (CMS).  
   

### XCube Core Concept

The XCube core concept "3S" stands for — Simple, Secure and Scalable.    
Its foundational design concept covers the free choice of frameworks and libraries,
also known as framework-agnostic. 

**XCube** is the core layer of the platform giving required minimum functionality to aggregate preexistent subsystems, 
for example, Legacy subsystem to build a customized CMS, ecommerce platform, gallery, forum, or to manage multiple WordPress, etc.

The XCube core was developed from scratch by Kazuhisa Minato (lead programmer in the game industry), 
addressing the challenges of software development for current and future parallel hardware architectures 
which are now dominated by multicore architectures. 
Thus implementing a task-oriented program execution with backward compatibility and 
the complementary concept of forward compatibility. 

The XCube concept mediates between existing computing resources and applications on the one hand, 
and the high-level goals required for personalization at scale on the other. 

In a slide deck (wiki), Kazuhisa Minato depicts the developed architecture to support these new capabilities. 
He also described some software engineering challenges that arise in this context.
The key features of the new architecture are :
- the ability to interface with existing applications, while adding considerable support for tasks; 
- the ability to incorporate other subsystems so that the web platform adapts over time; 
- and the ability to cope with resource variability and mobility. 

![XCube Core](https://raw.githubusercontent.com/xoopscube/artwork-social-media/f9b35edbc1b3f9106d14588201f1b7203d64b510/images/xcl_dia_render_sequence.jpg)

* Self-initialization
* Drive mechanism
* Rendering sequence

![Core implementation](https://raw.githubusercontent.com/xoopscube/artwork-social-media/master/images/xcl_dia_render_base.jpg)

### XCube Architecture

The original XCube core implements programming concepts of object-oriented, design patterns and real-time 3D rendering.
The underlying logic of the core main classes which the project team narrowed down the "**Core program**" is built
on a simple design concept "**No Framework**" or **framework-agnostic**. 

Moreover, such software design was needed to develop a task-base modular architecture allowing web developers and designers to run their favorite frameworks and
libraries.

If anyone aims to implement new features, it can be done with a custom subsystem running on XCube platform,
aside initial [XCL Bundle Package ](xcl-package.md) or extend it with a single file component (ref. preload mechanism).

XCube design borrows ideas from traditional mechanisms outside the web. 
Mechanisms such as preloading, delegates, task systems, generic render-sequence from .NET, 
video game programing and scene graph to implement an ideal specification.

XCube handles most things as re-usable materials, managers, add-ons (modules), preloads (extensions) 
and Themes are materials for end-users.    

Delegates, Virtual Services and Tasks of the Task System(*) are materials for developers.  

At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful and simple.  
The core architecture was designed to build dynamic websites, web applications and web services.


#### Preload 

A Preload is a single-file component, an extension for customization and personalization of a website, 
so Webmasters don't have to change the source code of the trusted system.

#### Type Safe 

Among other things, XCube has some policies and features to ensure security.  
One of these policies is the safe type-safe emulation.

#### Action Form 

Another one is Action-Form that always check and identify valid values like a peripheral driver interface.   

#### Framework Agnostic

Support for modern JavaScript frameworks (compiled reactjs, vue, fluent, etc.) and easily integration of CSS Frameworks.

### XCube Development

The XOOPSCube Team released the Legacy subsystem before XCube 1.0 was completed by Kazuhisa Minato as the first
XCube major version. Therefore, Legacy implements many features to emulate Xoops2.
So the Base subsystem Legacy is an exception, made by highly skilled developers and high experimented designers
to ensure backwards compatibility and interoperability with XOOPS2 (©2002 Kazumi Ono @Onokazu, GPL2)
and later XOOPS2-JP (©2005 XOOPS2 Japan, GPL2) Japanese versions with multibyte character support.

The Legacy subsystem main functions have been placed into their own modules, such as user account management,
and private messages.

#### Design Patterns

The singleton design pattern is well-known to solve recurring design problems of reusable
object-oriented software. It can be used to reduce memory usage and can also be used as a basis for
other design patterns, such as the abstract factory, factory method, builder, and prototype patterns.

**Why is such mechanism needed?**

> In the 3D application world, there are many "controversies" around the question of the best process.   
For example, the scene management has multiple solutions — Octree, Quadtree, Terrain, Sphere tree, no tree and more... 
> but all these controversies are useless, because the best process is determined by what the application has to do.  
> — Kazuhisa Minato

A web application has commonly the same "controversies" about required features.  

XCube delegates them to managers and controllers. So developers are free to change them according to their needs.
Thus, it's a must-have for flexibility. However, XCube also benefits from another _side effect_ of this mechanism.

#### Delegate manager

XCube starts up managers from the configuration settings written into the file _default.ini_ 
or override with a simple file _custom.ini_

XCube consists of several managers and each manager provides careful management of its members and a consistent API. 
Developers can choose from managers, modules, delegate and preload mechanism or interfaces for extensible and flexible 
customization. 

Some distribution packages have been released with a good starting INI file, a set of base modules and 
provide **preload** files for a rapid site development. A web developer can run a pre-configured bundled package as
the starting point that meets the production expectations of a website.

### XCube Namespace

XCube used a prefix convention to implement the concept of namespace when PHP didn't provide any.  
PHP namespaces were introduced in PHP 5.3, and subsequently updated.

In the PHP world, namespaces are designed to solve two problems that authors of libraries and 
applications encounter when creating re-usable code elements such as classes or functions: 
Name collisions between code you create, and internal PHP classes/functions/constants or 
third-party classes, functions, constants.

### Exchangeable

The XCube design is probably common to the most used design pattern in modern programming languages like Java and C#. 
Some advantages of XCube design are : 
- inheritance, as object creation is delegated to subclasses, 
- it promotes consistency, classes are made to be polymorphic, thus interchangeable; 
- write more type-safe code than before; 
- since most objects are exchangeable, it's possible to change the layer (Base subsystem), not only managers.

The _Base_ subsystem can be replaced or written from scratch. Anyone can develop anything, anytime, anywhere, 
except changing the core that makes everything "exchangeable" allowing for scalability, flexibility and freedom.

### Virtual Service

XCube provides a server-client model for site communication and module communication. 
The virtual service abstracts the actual program, so the client can connect with a module and from another website. 
XCube can connect with the website service and can provide the service to other websites.

### Render Engine

XCube defines the render-system class as an interface which renders html data from various template-formats. 
XCube core handles render buffer instances as output data. The Render system writes the html data. 

![Render Engine](https://raw.githubusercontent.com/xoopscube/artwork-social-media/master/images/xcl_dia_render_layout_output.jpg)

Common render systems are registered in the Root. However, it's not a good solution if the render system is only 
used by a single module. So a custom render system shouldn't need to be registered to the root, instead the render 
system should be a sub-class of the XCube layer. If the class doesn't depend on modules, it can be re-used.  

This mechanism means that XCube doesn't enforce a template format nor impose any to developers and designers. 
XCube allows you to develop your own template engine or run the default Smarty render engine.

+ Module developers can develop their own render system.
+ Designers can plan new themes formats.

### Multi-Render

XCube doesn't have a fixed specification for themes and templates. 
The Generic Render-Sequence tries to render the final output switching render-systems. 
This allows complete control over a finished custom designed with your favorite framework.

### Trust Path

The TRUST PATH concept was introduced by @Gijoe from Peak.ne.jp (based on Minahito’s idea as GijoeI credited).
It aims to secure subsystem modules by moving all module PHP files out of public _web root_ or 
server _document_root_ (e.g. public_html) to make it private and safe.

The second benefit of using TRUST PATH is that D3 modules duplication become easily manageable.
With the introduction of a trusted source and duplicable modules, or Duplicable V3/D3, 
webmasters are free to duplicate and rename installed D3 modules.

?> **Tip** The folder **TRUST_PATH** can be renamed to whatever name you wish.

### Duplicable Modules

Gijoe, one of the most prominent web developers, implemented the system architecture of Trust Path and
developed the most useful _duplicable_ or _duplicatable_ D3 modules like altsys, pico and protector.

A XCL Legacy website can have many instances of the same module with each own template files and MySQL table files,
and all run securely from a single trusted source outside the web root directory.

Public HTML directory :

- public/modules/pico
- public/modules/cms
- public/modules/page

Trust path directory :

- trust_path/modules/pico

!> **Important** The module name under TRUST_PATH can not be changed !

To differentiate the two instance of a module, you can customize template files,
localization and translations from the Admin control panel.

!> **Caution Using D3** Create a Template Set before any UPDATE !  
The template files are centralized, thus if you update the module, 
the template files of all duplicated modules will be overwritten.

A module code generator Tubson is available to take advantage of D3 and Trust Path.

### XCube Tools

XCube is simple and recommended as a tool for complex tasks. In order to facilitate development, 
the following tools automatically generate the code for modules.

+ Manifesto is a special file document for tools that work automatically with XCube. 
+ Cubson is a code generator for the subsystem Legacy and works with extoolsD.dll
+ Tubson is a web browser code generator from SQL table with Trust Path support

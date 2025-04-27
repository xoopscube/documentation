<dl>
  <dt>The X-Codex Documentation provides information about XCube core concept.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">XCube Application Architecture</summary>

- [XCube Core](#xcube-core)
- [XCube Development](#xcube-development)
- [XCube Subsystem](#xcube-base-system)
- [Exchangeable](#exchangeable)
- [XCube Namespace](#xcube-namespace)
- [Delegate manager](#delegate-manager)
- [Preload](#preload)
- [Type Safe](#type-safe)
- [Action Form](#action-form)
- [Virtual Service](#virtual-service)
- [Render Engine](#render-engine)
- [Multi-Render](#multi-render)
- [Framework Agnostic](#framework-agnostic)
- [Trust Path](#trust-path)
- [Duplicable Modules](#duplicable-modules)

</details>

## XCube Core

**The XCube core concept "3S" stands for — Simple, Secure and Scalable.**

The minimalist XCube core, located within the `html/core` directory, serves as the foundational layer for the XOOPS Cube Legacy application. 
Its primary function is to bootstrap the system and handle the initial web request lifecycle. Key features include:

- Basic Autoloading: Mechanisms for automatically loading necessary PHP classes, enabling a modular code structure.
- Request Handling: Core components to receive and process incoming HTTP requests.
- Basic Class Registry: A system for managing and accessing core objects and services.
- Initialization Routines: Essential scripts to set up the environment, including path definitions and basic configuration loading.

**Semantic Summary**

This core provides the essential infrastructure for XCube Legacy to start execution upon a web request. It focuses on initialization, class loading, and fundamental request management, laying the groundwork for subsequent module and theme processing. It offers a minimalist foundation without the extensive built-in tools often associated with full-fledged frameworks, emphasizing a lightweight and extensible base.

This overview highlights the core's bootstrapping and request-handling nature, which should be the starting point for developers looking at the API documentation for these fundamental aspects of the system.


**XCube Core Design Philosophy: Minimalism and Flexibility**

At its core, XCube's minimalism focuses on intentionality: eliminating the superfluous to achieve meaningful simplicity. While the XCube core incorporates established Design Patterns recognized as best practices by experienced object-oriented software developers, its design also draws inspiration from traditional mechanisms beyond the web. Concepts such as preloading, delegates, task systems, and a generic render-sequence (inspired by .NET and video-game programming) were adopted to implement an ideal specification.

  
<div layout="row sm-column my-6">
<div self="size-2of3">
<p>XCube design was crucial for developing a task-based, modular architecture, empowering web developers and designers to utilize their preferred frameworks and libraries. Consequently, the underlying logic of the core main classes – what the project team termed the "Core program" – is built upon a simple "No Framework" or framework-agnostic design concept, leveraging an event-driven approach for extensibility.</p>
</div>
<div><img src="https://xoopscube.github.io/documentation/_media/cube-core.png" alt="core"></div>
</div>
  
  
The XCube core was developed from scratch by Kazuhisa Minato (lead programmer in the game industry),
addressing the challenges of software development for current and future parallel hardware architectures
which are now dominated by multicore architectures. In Object-Oriented Programming (OOP), task-based and 
event-driven architectures represent distinct but potentially complementary approaches to structuring 
program flow and component interaction. 

The XCube concept mediates between existing computing resources and applications on the one hand,
and the high-level goals required for personalization at scale on the other. Thus implementing a 
program execution with backward compatibility and the complementary concept of forward compatibility.

In a slide deck (wiki), Kazuhisa Minato depicts the developed architecture to support these new capabilities.
He also described some software engineering challenges that arise in this context.
The key features of the new architecture are :
- the ability to interface with existing applications, while adding considerable support for tasks;
- the ability to incorporate other base systems so that the web platform adapts over time;
- and the ability to cope with resource variability and mobility.

![XCube Core](https://raw.githubusercontent.com/xoopscube/artwork-social-media/f9b35edbc1b3f9106d14588201f1b7203d64b510/images/xcl_dia_render_sequence.jpg)

* Self-initialization
* Drive mechanism
* Rendering sequence

![Core implementation](https://raw.githubusercontent.com/xoopscube/artwork-social-media/master/images/xcl_dia_render_base.jpg)

## XCube Development

The core development follows a parallel programming methodology exploiting a task-based view of application software 
and event-driven architecture.

Task-based programming models with static or dynamic task creation was a main topic discussed by Minahito,
core programmer, and the prominent developers then. Mainly because the mainstream web programming model,
or web development trend was, and still largely sequential and sort of von Neumann oriented.
Also, because sophisticated programming techniques were required to access the parallel resources available
(e.g. XCube Service). Therefore, a change in developers mindset, about programming and software development,
was imperative for making the capabilities of the new XCube core available to web developers with various skills
to create and release new subsystems architectures.

**Task-Based Architecture**

```mermaid
graph LR
    A("Object A\n(Initiator)") --> B("Object B\n(Task Processor)")
    B --> C("Object C\n(Final Processor)")
    B -- "Direct Method Call" --> H("Helper Object\n(Performs Sub-\ntasks for B)")
    H -- "Direct Method Call" --> B
```

- Focuses on defining and executing specific, discrete units of work or procedures (tasks).
- The program flow is often linear or follows a directed sequence of task execution.
- Components typically interact through direct method calls, where one object invokes a method on another to perform a specific action.
- Emphasis is on achieving a particular goal through a series of steps.
- Think of it like a recipe: follow the steps in order to get the final dish.

**Event-Driven Architecture**

```mermaid
graph LR
    A("Object A\n(Event Publisher)") --> EB("Event Bus/Broker\n(Publishes Event)")
    EB --> B("Object B\n(Event Handler)")
    C("Object C\n(Event Publisher)") --> EB
    EB --> D("Object D\n(Event Handler)")
```

- Centers around the production and consumption of events, which signify a change in state or a significant occurrence.   
- Components are decoupled and communicate indirectly by emitting and subscribing to events.   
- When an event occurs, interested components (subscribers or listeners) react to it.   
- The program flow is more reactive and less rigidly defined, driven by the occurrence of events.   
- Think of it like a notification system: when something happens, those who are interested are notified and can take action.   

**Difference or Complementary**

```mermaid
graph LR
    UI("User Interface\n(Triggers\nInteraction)") --> CH("Command Handler\n(Task-Based)")
    CH --> OS("Order Service\n(Task-Based)")
    OS --> InternalFlow((Internal Task-Based Flow))
    CH -- Emits Event --> NS("Notification\nService\n(Event Handler)")
    OS -- Emits Event --> LS("Logging Service\n(Event Handler)")
```

These two approaches are different in their fundamental control flow and interaction paradigms,  
but they are not mutually exclusive and can be highly complementary in OOP systems:

- Levels of Abstraction  
  An application might use an event-driven architecture at a higher level for inter-module communication or handling user interactions, while individual modules internally use a task-based approach to execute specific operations triggered by those events.

- Combining Paradigms  
  Objects can both perform tasks (have methods that are called directly) and emit/listen for events. For example, a "Order" object might have a processPayment() task and also emit an "OrderPaid" event upon successful completion.

- Decoupling and Orchestration  
  Event-driven architectures excel at decoupling components, making systems more flexible and scalable. However, the handlers that react to events often perform specific tasks, bringing the task-based approach into play. An orchestrator component might listen to several events and then trigger a sequence of tasks in response. 
    
- UI Development  
  Event-driven programming is dominant in GUI development (handling button clicks, mouse movements), where events trigger specific task-oriented functions within the application logic.   

**Why a dual-system with a dual render was needed?**

While task-based architecture emphasizes direct method calls and sequential execution of operations, event-driven architecture focuses on asynchronous communication and reactive behavior based on events. In OOP, these are often complementary strategies used at different levels or in different parts of an application to achieve modularity, responsiveness, and effective handling of both internal operations and external interactions. The choice of which approach dominates depends on the specific requirements and complexity of the system being built.

> In the 3D application world, there are many "controversies" around the question of the best process.   
> For example, the scene management has multiple solutions — Octree, Quadtree, Terrain, Sphere tree, no tree and more...
> but all these controversies are useless, because the best process is determined by what the application has to do.  
> — Kazuhisa Minato

A web application has commonly the same "controversies" about required features.

XCube delegates to managers and controllers. So developers are free to change them according to their needs.
Thus, it's a must-have for flexibility. However, XCube also benefits from another _side effect_ of this mechanism.

The singleton design pattern is well-known to solve recurring design problems of reusable
object-oriented software. It can be used to reduce memory usage and can also be used as a basis for
other design patterns, such as the abstract factory, factory method, builder, and prototype patterns.

## XCube base-system

The XOOPSCube Team released the Legacy subsystem before XCube 1.0 was completed by Kazuhisa Minato as the first
XCube major version. Therefore, the package Legacy implements many features to emulate Xoops2 system.
So the Base subsystem Legacy is an exception, made by highly skilled developers and high experimented designers
to ensure backwards compatibility and interoperability with XOOPS2 (©2002 Kazumi Ono @Onokazu, GPL2)
and later XOOPS2-JP (©2005 XOOPS2 Japan, GPL2) Japanese versions with multibyte character support.

The Base subsystem Legacy main functions have been placed into their own modules, such as user group management,
private messages, render engine, and standard cache.

## Exchangeable

The XCube design is probably common to the most used design pattern in modern programming languages like Java and C#.

Some advantages of XCube design : 
- inheritance, as object creation is delegated to subclasses,
- it promotes consistency, classes are made to be polymorphic, thus interchangeable;
- write more type-safe code than before;
- since most objects are exchangeable, it's possible to change the layer (Base subsystem), not only managers.

The _Base_ subsystem is designed to be replaceable or entirely rewritten, empowering developers to create anything, anytime, anywhere.

However, the core itself – the very mechanism that enables this "exchangeability" and ensures scalability, flexibility, and freedom – remains intentionally immutable.

## XCube Namespace

XCube used a prefix convention to implement the concept of namespace when PHP didn't provide any.  
_PHP namespaces were introduced in PHP 5.3, and subsequently updated._

In the PHP world, namespaces are designed to solve two problems that authors of libraries and
applications encounter when creating re-usable code elements such as classes or functions:
Name collisions between code you create, and internal PHP classes, functions, constants or
third-party classes, functions and constants.

## Delegate manager

XCube starts up managers from the configuration settings written into the file _default.ini_
or override with a simple file _custom.ini_

XCube consists of several managers and each manager provides careful management of its members and a consistent API.
Developers can choose from managers, modules, delegate and preload mechanism or interfaces for extensible and flexible
customization.

Some distribution packages have been released with a good starting INI file, a set of base modules and
provide **preload** files for a rapid site development. A web developer can run a pre-configured bundled package as
the starting point that meets the production expectations of a website.

## Preload

A Preload is a single-file component, an extension for customization and personalization of a website,
so Webmasters don't have to change the source code of the trusted system.

- A delegate is a mechanism to delegate part of the processing to another program.
- A preload is a mechanism to perform preprocessing before the module is executed.

Delegate and preload are essentially different mechanisms and can be used independently.  

In practice, you an run several **Single File Components**, or one-file hacks, using the delegate mechanism 
in a **preload** to modify the processing and behavior of modules.

## Type Safe

Among other things, XCube has some policies and features to ensure security.  
One of these policies is the safe type-safe emulation.

## Action Form

Another one is Action-Form that always check and identify valid values like a peripheral driver interface.

## Virtual Service

XCube provides a server-client model for site communication and module communication.
The virtual service abstracts the actual program, so the client can connect with a module and from another website.
XCube can connect with the website service and can provide the service to other websites.

## Render Engine

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

## Multi-Render

XCube doesn't have a fixed specification for themes and templates.
The Generic Render-Sequence tries to render the final output switching render-systems.
This allows complete control over a finished custom designed with your favorite framework.

## Framework Agnostic

Support for modern JavaScript frameworks (compiled reactjs, vue, fluent, etc.) and easily integration of CSS Frameworks.

## Standard Cache

XCube has introduced a new caching policy concept called Standard Cache. This component manages the standard caching 
policy of the web application platform. It is a module of the Legacy subsystem whose purpose is to reduce the time 
required to execute certain processes by caching module and block templates. 

The caching function saves the content to temporary files — if the caching parameter is active, and if the cache files 
are available — it prevents overloading the server with further SQL queries.
This is a useful and powerful feature that speeds up the loading of a web page for all users of the site.

?> **NOTE** : The standard policy is to cache files for all user groups except the webmaster group.

## Trust Path

The TRUST PATH concept was introduced by @Gijoe from Peak.ne.jp (based on Minahito’s idea as GijoeI credited).
It aims to secure subsystem modules by moving all module PHP files out of public _web root_ or
server _document_root_ (e.g. public_html) to make it private and safe.

The second benefit of using TRUST PATH is that D3 modules duplication become easily manageable.
With the introduction of a trusted source and duplicable modules, or Duplicable V3/D3,
webmasters are free to duplicate and rename installed D3 modules.

?> **Tip** The folder **TRUST_PATH** can be renamed to whatever name you wish.

## Duplicable Modules

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

[Code generator tools](/en/development/xcube-tools.md) like Tubson is available to take advantage of D3 and Trust Path.



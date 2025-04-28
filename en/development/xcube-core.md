

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



### Visualize the minimal XCube core 

Given the limited number of files and their apparent roles, the Mermaid schema is relatively simple  
but can still illustrate the basic flow and dependencies.

![Core implementation](https://xoopscube.github.io/documentation/xcube/xcube-api-diagram.jpg)


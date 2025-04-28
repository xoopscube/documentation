

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


## XCube Bootstrap Process

The XCL (XOOPS Cube Legacy) bootstrap process is a sophisticated sequence that loads the core framework,  
initializes the rendering system, and outputs the final theme.

## 1. Bootstrap Initialization (mainfile.php)

The process begins with `mainfile.php`, which serves as the entry point for all requests:

- Define constants and paths
- Root path (public) 
- Trust path (private) 
- URL
- etc.

And requires:

- Load protector (security module) pre-check
- Initialize cubecore
- Load common functionality if not prevented
- Load protector post-check

## 2. Core Initialization (cubecore_init.php)

`cubecore_init.php` loads the core classes and initializes the configuration system:

- XCL version constants
- XCube_Root class
- XCube_Controller class
- IniHandler class

Defined configuration file paths  
- Default settings : site_default.ini
- XCUBE_SITE_CUSTOM_FILE settings : site_custom.ini

## 3. Loading Definitions (definition.inc.php)

The system loads `definition.inc.php` which contains essential constants:

- Block positions
- Path definitions
  - CACHE PATH
  - MODULE PATH
- Render system definition
  - Legacy_RenderSystem

## 4. Configuration Loading (site_default.ini)

The system reads `site_default.ini` to configure components:

```ini
[Cube]
Root=XOOPS_ROOT_PATH
Controller=Legacy_Controller
SystemModules=legacy,legacyRender,user,profile,stdCache,altsys,message,protector
// ...

[RenderSystems]
Legacy_RenderSystem=Legacy_RenderSystem
Legacy_AdminRenderSystem=Legacy_AdminRenderSystem
// ...

[Legacy_RenderSystem]
path=/modules/legacyRender/kernel
class=Legacy_RenderSystem
// ...
```

#### Environment Settings

The ini file of XOOPSCube follows an inheritance pattern  
and are loaded in the following order:

1. site_default.ini
2. site_default.dist.ini
3. site_custom.ini
4. site_custom_ {XOOPS_SALT} .ini

The value read earlier is overwritten with the later setting.

#### How to get the value set in site_default.ini and site_custom.ini

```
    $root = XCube_Root :: getSingleton ();  
    $value = $root-> getSiteConfig ('section name','parameter name'));
``` 

Example : site_custom.ini

```php 
    [Foo]    
    Bar = Baz    
    $root  =  XCube_Root :: getSingleton ();    
    $value  =  $root-> getSiteConfig ( 'Foo' , 'Bar' );    
    echo  $value ;    
    // Output is Baz
```

_trust_path/settings/site_custom.ini_ **overwrites** _trust_path/settings/site_default.ini_



## 5. Controller Initialization (Legacy_Controller)

The Legacy_Controller is initialized based on the configuration:

```php
// In Legacy_Controller.class.php
class Legacy_Controller extends XCube_Controller
{
    // Initialize modules, services, and context
    public function __construct()
    {
        parent::__construct();
        $this->_mStrategy = new Legacy_PublicControllerStrategy($this);
        // ...
    }
    
    // Execute the request
    public function execute()
    {
        // Process blocks, modules, and render the page
        // ...
    }
}
```

## 6. Render System Initialization (Legacy_RenderSystem)

The Legacy_RenderSystem is loaded to handle the rendering process:

```php
// In Legacy_RenderSystem.class.php
class Legacy_RenderSystem extends XCube_RenderSystem
{
    // Initialize Smarty and template system
    public function __construct()
    {
        parent::__construct();
        // ...
    }
    
    // Create render targets for different parts of the page
    public function createRenderTarget($type = null)
    {
        // Create theme, block, or main content render targets
        // ...
    }
    
    // Render the page
    public function render(&$target)
    {
        // Process templates and output HTML
        // ...
    }
}
```

## 7. Template Processing (Smarty)

The system uses Smarty for template processing:

```php
// In Legacy_RenderSystem.class.php
function render(&$target)
{
    // Initialize Smarty template engine
    $smarty = new XoopsTpl();
    
    // Set template variables
    foreach ($target->getAttributes() as $key => $value) {
        $smarty->assign($key, $value);
    }
    
    // Process the template
    $result = $smarty->fetch($target->getTemplateName());
    
    // Set the result
    $target->setResult($result);
}
```

## 8. Final Output

The final output process combines all rendered components:

1. The main content is rendered by the module's action
2. Blocks are rendered and positioned according to their settings
3. The theme template (theme.html) is loaded and populated with content
4. The complete HTML is sent to the browser

## Flow Summary

1. `mainfile.php` → Sets up environment and loads core
2. `cubecore_init.php` → Initializes XCube core classes
3. `definition.inc.php` → Defines constants and paths
4. `site_default.ini` → Configures components and modules
5. `Legacy_Controller` → Processes the request
6. `Legacy_RenderSystem` → Handles template rendering
7. Smarty → Processes templates
8. Theme output → Final HTML sent to browser

This architecture allows XCL to maintain a clean separation between content,  
presentation, and logic while providing a flexible framework for module development.
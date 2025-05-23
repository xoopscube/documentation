[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/2.0.0/active.svg)](https://www.repostatus.org/#active)

## 📘 XCL documentation

  This documentation provides information about The XOOPSCube Legacy Project and XCL Web Application Platform.

**Intended Audiences : 👥 This information is intended for administrators, developers and designers.**



![X-Codex](https://github.com/xoopscube/documentation/blob/master/_media/xcl-codemo-screenshot.png "XCL Documentation")



> [!NOTE]
> The folder structure of the Markdown files provides links to edit directly on the GitHub repository.

### 📦  [API Documentation XCL v2.5.x](https://xoopscube.github.io/documentation/api/)

### 📦  [API XCube Core Documentation](https://xoopscube.github.io/documentation/xcube/)


### Visualize the minimal XCube core 

Given the limited number of files and their apparent roles, the Mermaid schema is relatively simple  
but can still illustrate the basic flow and dependencies.

```mermaid
graph LR
    subgraph "XCube Core (html/core)"
        bootstrap --> PathDefs((Path Definitions))
        bootstrap --> Autoloader((Autoloader))
        bootstrap --> CoreFuncs((Core Functions))
        bootstrap --> XRoot((XCube_Root))
        bootstrap --> Request((Initial Request Handling))

        XRoot --> Registry((Core Object Registry))
        Registry -- provides access to --> Controller((XCube_Controller))
        Registry -- provides access to --> Module((XCube_Module))
        Registry -- provides access to --> Theme((XCube_Theme))
        Registry -- provides access to --> Language((XCube_Language))

        Controller --> Dispatch((Module Dispatching))
        Controller --> Render((Theme Rendering))

        Module --> Logic((Module Logic))
        Theme --> UI((User Interface Rendering))
        Language --> Locale((Text Localization))

        functions --> Utils((Utility Functions))
        Utils -- used by --> CoreComponents((Various Components))
    end
```

Templates
----
Templates are easy to identify. The folder name or the file name starts with _underscore

+ _coverpage.md
+ _navbar.md
+ _sidebar.md

Features
----
- Iconify 
- Mermaid  
- Prism 
- Theme dark/light
- xLayout Helper 
- zoom-image    


Installation
----

Install locally by running:

    Todo : install project

Contribute
----
- Be awesome
- Make things faster
- Write Tutorials
- Share Tips and code samples  
   
Issue Tracker: https://github.com/xoopscube/documentation/issues  
Source Code: https://github.com/xoopscube/documentation  

Support
-------

If you are having issues or if you have suggestions, please let us know.
Report any issue or suggestion to project GitHub tracker.

License
----

The project is licensed under the MIT license.

-----

### Big Thanks


<p align="center"><a href="https://www.jetbrains.com/" target="_blank">JetBrains</a> is an active participant in the <a href="https://www.jetbrains.com/opensource/" target="_blank">Open Source community</a>.<br>
Big thanks to the JetBrains Team for supporting XOOPSCube Project ^_^/  </p>

<p align=center><img src="https://raw.githubusercontent.com/xoopscube/artwork-social-media/master/logo/jetbrains-logo-variant-3-256.png" alt="Big thanks to the JetBrains Team for supporting XOOPSCube Project" title="Big thanks to the JetBrains Team for supporting XOOPSCube Project" /></p>

-----

      —///////////////////////—

_When you know who you are, you know what to do, you know what story to tell, and the stories that you want to hear and see. We share the essential knowledge and understanding of “open source” necessary to create tools that encourage creativity and free speech._


>"Learn everything you can.  
Try everything that comes along.  
Look at everything there is to see.  
Search, experiment, make mistakes, fail, stand up.  
Turn religious, turn conservative, turn radical.  
And then forget all about it and find your way to create."    


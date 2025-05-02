
 

## Architecture Overview

The XCube_Delegate System is a core component of XOOPSCube Legacy that enables extensibility through a flexible callback mechanism. This system allows modules, themes, and plugins to modify or extend the framework's behavior without directly modifying core code. The delegate system implements a variation of the Observer pattern that facilitates loose coupling between components.

This page documents the structure and functionality of the XCube_Delegate System. For information about the overall controller architecture, see Legacy_Controller and Request Lifecycle.

<div><img src="_media/xcube-delegate.svg" alt="xcube delegate"></div>


<span class="iconify" data-icon="mdi:github"></span> Sources: <code><a href="
https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php#L1-L709" target="_blank">XCube_Delegate.class.php#L1-L709</a></code> <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Root.class.php#L1-L549" target="_blank">XCube_Root.class.php#L1-L549</a></code>



## Core Components


## XCube_Ref

A simple adapter class that solves the problem of passing variables by reference to delegate callbacks. Since PHP4, functions receive copied values of objects, but using XCube_Ref allows functions to receive the actual object.

When a delegate call needs to modify a parameter, wrapping it in XCube_Ref ensures the changes are reflected outside the callback:

```php
// Instead of:
$delegate->call($object); // object is copied, changes don't persist

// Use:
$delegate->call(new XCube_Ref($object)); // changes to object will persist
```
<span class="iconify" data-icon="mdi:github"></span> Source: <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php#L31-L59" target="_blank">XCube_Delegate.class.php#L31-L59</a></code>


## XCube_Delegate

The primary class that implements the delegate pattern. This class maintains a list of callback functions and executes them when called. It supports parameter type checking and priority-based execution order.

Key features:

- Supports parameter signature validation
- Callbacks can be registered with priorities (1-10)
- Supports lazy registration when delegate manager isn't ready
- Can load files on demand when executing callbacks
- Callbacks can break the execution chain by returning `XCUBE_DELEGATE_CHAIN_BREAK`

## XCube_DelegateManager

Manages delegate registrations and acts as a mediator between delegates and callback functions. This class handles the case where callbacks are registered before their target delegates exist.

The manager maintains these internal structures:

- `_mDelegates`: A map of registered delegates indexed by name
- `_mCallbacks`: Callbacks waiting to be connected to not-yet-registered delegates
- `_mCallbackParameters`: Parameters for pending callbacks

<span class="iconify" data-icon="mdi:github"></span> Source: <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php#L388-L541" target="_blank">XCube_Delegate.class.php#L388-L541</a></code>


## XCube_DelegateUtils

A utility class that provides static convenience methods for working with delegates. It simplifies common delegate operations with shorthand methods.

These utility methods make it easier to work with delegates without directly accessing the delegate manager:

- `call()`: Calls a delegate by name
- `raiseEvent()`: Alias for call(), used for event-style delegates
- `applyStringFilter()`: Special case for applying string filters

<span class="iconify" data-icon="mdi:github"></span> Source: <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php#L543-L708" target="_blank">XCube_Delegate.class.php#L543-L708</a></code>

## XCube_Root Integration

The delegate system is integrated with the core framework through XCube_Root, which serves as the central registry for the application.

{media}

<span class="iconify" data-icon="mdi:github"></span> Sources : <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Root.class.php#L48-L50" target="_blank">XCube_Root.class.php#L48-L50</a></code>
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Root.class.php#L325-L337" target="_blank">XCube_Root.class.php#L325-L337</a></code>
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Controller.class.php#L137-L142" target="_blank">XCube_Controller.class.php#L137-L142</a></code>

## XCube Priority System

The delegate system includes a priority mechanism that controls the order in which callbacks are executed. Predefined constants are provided for common priority levels:

<div class="table-wrapper">
<table><thead><tr><th>Constant</th><th>Value</th><th>Purpose</th></tr></thead><tbody><tr><td>XCUBE_DELEGATE_PRIORITY_FIRST</td><td>10</td><td>Callbacks that need to run first</td></tr><tr><td>XCUBE_DELEGATE_PRIORITY_NORMAL</td><td>50</td><td>Default priority level</td></tr><tr><td>XCUBE_DELEGATE_PRIORITY_FINAL</td><td>100</td><td>Callbacks that need to run last</td></tr><tr><td>XCUBE_DELEGATE_PRIORITY_1-10</td><td>10-100</td><td>Fine-grained priorities</td></tr></tbody></table>
</div>

When callbacks are registered with the same priority, they execute in the order they were registered.

<span class="iconify" data-icon="mdi:github"></span> Sources : <code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php#L66-L79" target="_blank">XCube_Delegate.class.php#L66-L79</a></code>
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Controller.class.php#L138-L139" target="_blank">XCube_Controller.class.php#L138-L139</a></code>

---

<details>
<summary style="cursor: pointer;"><span class="iconify" data-icon="mdi:github"></span> Reference</summary>
<ul>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_ActionFilter.class.php" target="_blank"><span>html/core/XCube_ActionFilter.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_ActionForm.class.php" target="_blank"><span>html/core/XCube_ActionForm.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Controller.class.php" target="_blank"><span>html/core/XCube_Controller.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Delegate.class.php" target="_blank"><span>html/core/XCube_Delegate.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_HttpContext.class.php" target="_blank"><span>html/core/XCube_HttpContext.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Identity.class.php" target="_blank"><span>html/core/XCube_Identity.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_LanguageManager.class.php" target="_blank"><span>html/core/XCube_LanguageManager.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Object.class.php" target="_blank"><span>html/core/XCube_Object.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_PageNavigator.class.php" target="_blank"><span>html/core/XCube_PageNavigator.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Permission.class.php" target="_blank"><span>html/core/XCube_Permission.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Property.class.php" target="_blank">html/core/XCube_Property.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_RoleManager.class.php" target="_blank"><span>html/core/XCube_RoleManager.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Root.class.php" target="_blank"><span>html/core/XCube_Root.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Service.class.php" target="_blank"><span>html/core/XCube_Service.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Session.class.php" target="_blank"><span>html/core/XCube_Session.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/XCube_Utils.class.php" target="_blank"><span>html/core/XCube_Utils.class.php</span></a></li>
<li><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/core/libs/IniHandler.class.php" target="_blank"><span>html/core/libs/IniHandler.class.php</span></a></li>
</ul></details>
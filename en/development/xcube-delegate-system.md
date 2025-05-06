
### Key Delegates in the XCube Framework for Rendering and Theme Integration

The XCube framework in XOOPSCube Legacy uses a robust delegate system that allows modules to hook into the rendering process without modifying core code. These delegates follow a publisher-subscriber pattern where components can register extension points and other components can add callbacks to these delegates.

### Key Rendering and Theme Integration Delegates


1. Legacy_RenderSystem.SetupXoopsTpl
This delegate is called during the initialization of the template engine (Smarty), allowing modules to modify or extend the template engine before rendering begins.

```php
$this->mSetupXoopsTpl = new XCube_Delegate();  
$this->mSetupXoopsTpl->register('Legacy_RenderSystem.SetupXoopsTpl');
```php

Legacy_RenderSystem.class.php:144-145

This delegate is called in the prepare() method:

```php
$this->mSetupXoopsTpl->call(new XCube_Ref($mTpl));
```

Legacy_RenderSystem.class.php:167

2. Legacy_RenderSystem.BeginRender
This delegate is called just before rendering begins, giving modules a chance to perform actions before the actual rendering process.

```php
$this->mBeginRender = new XCube_Delegate();  
$this->mBeginRender->register('Legacy_RenderSystem.BeginRender');
```

Legacy_RenderSystem.class.php:147-148

It's called in various render methods:

```php
$this->mBeginRender->call(new XCube_Ref($mTpl));
```

Legacy_RenderSystem.class.php:310

And with buffer type information:

$this->mBeginRender->call(new XCube_Ref($this->mXoopsTpl), $target->getAttribute('legacy_buffertype'));
Legacy_RenderSystem.class.php:326

3. Site.JQuery.AddFunction
This delegate allows modules to add JavaScript functions that will be executed when the page loads:

XCube_DelegateUtils::call('Site.JQuery.AddFunction', new XCube_Ref($mContext->mAttributes['headerScript']));
Legacy_RenderSystem.class.php:394

4. Legacy_ThemeSelect.IsSelectableTheme
This delegate is used in the theme selection process to determine if a theme is selectable:

```php
$this->mIsSelectableTheme = new XCube_Delegate();  
$this->mIsSelectableTheme->register('Legacy_ThemeSelect.IsSelectableTheme');
```

ThemeSelect.class.php:34-35


### Theme Rendering Flow

The theme rendering process follows this sequence:

The Legacy_Controller triggers the view execution
When the module rendering is completed, the _executeViewTheme method is called
The theme object is obtained through the strategy pattern
The appropriate render system for the theme is retrieved
A theme render target is created and populated with content
Delegate calls allow for customization
The render system renders the theme

```php
public function _executeViewTheme(&$resultRenderTarget)  
{  
    /** Get the render-system through theme object. */  
    $theme =& $this->_mStrategy->getMainThemeObject();  
    if (!is_object($theme)) {  
        die('Could not found any compatible theme.');  
    }  
  
    $renderSystem =& $this->mRoot->getRenderSystem($theme->get('render_system'));  
    $screenTarget = $renderSystem->getThemeRenderTarget($this->mDialogMode);  
  
    if (is_object($resultRenderTarget)) {  
        $screenTarget->setAttribute('xoops_contents', $resultRenderTarget->getResult());  
    } else {  
        $screenTarget->setAttribute('xoops_contents', ob_get_contents());  
        ob_end_clean();  
    }  
  
    $screenTarget->setTemplateName($theme->get('dirname'));  
  
    //  
    // Rendering.  
    //  
    $renderSystem->render($screenTarget);  
    //...  
}
```

Legacy_Controller.class.php:947-971

### The Role of Render Targets

The framework uses different types of render targets for different content parts:

```php
define('XCUBE_RENDER_TARGET_TYPE_BUFFER', null);  
define('XCUBE_RENDER_TARGET_TYPE_THEME', 'theme');  
define('XCUBE_RENDER_TARGET_TYPE_BLOCK', 'block');  
define('XCUBE_RENDER_TARGET_TYPE_MAIN', 'main');
XCube_RenderSystem.class.php:27-30
```

### Delegate Integration Mechanism

The XCube delegate system enables modules to register callbacks that will be executed when delegates are called. The core functionality is in the XCube_Delegate class:

```php
public function add($callback, $param2 = null, $param3 = null)  
{  
    $priority = XCUBE_DELEGATE_PRIORITY_NORMAL;  
    $filepath = null;  
  
    //@gigamaster fixed to save memory  
    if (!is_array($callback) && strpos($callback, '::') !== false && 2 === count($tmp = explode('::', $callback))) {  
        $callback = $tmp;  
    }  
  
    if (null !== $param2) {  
        if (is_int($param2)) {  
            $priority = $param2;  
            $filepath = (null !== $param3 && is_string($param3)) ? $param3 : null;  
        } elseif (is_string($param2)) {  
            $filepath = $param2;  
        }  
    }  
  
    $this->_mCallbacks[$priority][] = [$callback, $filepath];  
    ksort($this->_mCallbacks);  
}
```

XCube_Delegate.class.php:224-244


### Flowchart of Rendering Process and Delegate Integration




<svg xmlns="http://www.w3.org/2000/svg" id="mermaid-bl0rvl9eg9u" aria-roledescription="flowchart-v2" class="flowchart" style="max-width:1695.8687744140625px" viewBox="0 0 1695.869 1560"><marker id="mermaid-bl0rvl9eg9u_flowchart-v2-crossEnd" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="12" refY="5.2" viewBox="0 0 11 11"/><g class="root"><g class="clusters"><g id="subGraph0" class="cluster" data-look="classic"><path d="M315.281 216h1372.588v128H315.281z"/><foreignObject width="184.063" height="24" class="cluster-label" transform="translate(909.544 216)"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module Integration Points</p></span></div></foreignObject></g></g><g class="edgePaths"><path id="L_A_B_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M151.4 62v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_C_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M151.4 166v83" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_C_D_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M151.4 307v35c0 10.333 0 18.667 12.541 26.799 12.54 8.132 37.622 16.064 50.162 20.029l12.541 3.966" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_D_E_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M315.841 448v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_E_F_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M315.841 576v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_F_G_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M315.841 680v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_G_H_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M315.841 784v4.167c0 4.166 0 12.5 8.767 20.562 8.767 8.063 26.302 15.855 35.069 19.751l8.768 3.896" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_H_I_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M486.869 936v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_I_J_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M486.869 1040v4.167c0 4.166 0 12.5 8.767 20.562 8.767 8.063 26.302 15.855 35.069 19.751l8.768 3.896" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_J_K_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M657.897 1192v4.167c0 4.166 0 12.5 8.555 20.557 8.556 8.057 25.666 15.839 34.222 19.729l8.555 3.891" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_K_L_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M825.016 1344v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_L_M_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M825.016 1448v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_N_H_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M822.338 319v438c0 17.333 0 34.667-27.887 49.651-27.886 14.984-83.659 27.619-111.545 33.937l-27.886 6.318" class="edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_O_J_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M1164.394 319v694c0 17.333 0 34.667-62.09 52.65-62.091 17.983-186.271 36.617-248.361 45.933l-62.09 9.317" class="edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_P_K_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M1498.631 319v822c0 25.333 0 50.667-85.535 72.984-85.535 22.317-256.604 41.618-342.139 51.268l-85.535 9.65" class="edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Q_D_0" marker-end="url(#mermaid-bl0rvl9eg9u_flowchart-v2-pointEnd)" d="M480.281 319v25c0 8.333 0 16.667-12.54 24.799-12.541 8.132-37.623 16.064-50.163 20.029l-12.541 3.966" class="edge-thickness-normal edge-pattern-dotted edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g></g><g class="nodes"><g id="flowchart-A-0" class="node default"><path d="M-143.4-27h286.8v54h-286.8z" class="basic label-container" transform="translate(151.4 35)"/><g class="label" transform="translate(38 23)"><rect/><foreignObject width="226.8" height="24"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Legacy_Controller.executeView()</p></span></div></foreignObject></g></g><g id="flowchart-B-1" class="node default"><path d="M-123.75-27h247.5v54h-247.5z" class="basic label-container" transform="translate(151.4 139)"/><g class="label" transform="translate(57.65 127)"><rect/><foreignObject width="187.5" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module Content Rendered</p></span></div></foreignObject></g></g><g id="flowchart-C-3" class="node default"><path d="M-128.881-27h257.762v54h-257.762z" class="basic label-container" transform="translate(151.4 280)"/><g class="label" transform="translate(52.519 268)"><rect/><foreignObject width="197.762" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>_executeViewTheme() called</p></span></div></foreignObject></g></g><g id="flowchart-D-5" class="node default"><path d="M-91.181-27H91.182v54H-91.181z" class="basic label-container" transform="translate(315.84 421)"/><g class="label" transform="translate(254.66 409)"><rect/><foreignObject width="122.363" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Get theme object</p></span></div></foreignObject></g></g><g id="flowchart-E-7" class="node default"><path d="M-130-39h260v78h-260z" class="basic label-container" transform="translate(315.84 537)"/><g class="label" transform="translate(215.84 513)"><rect/><foreignObject width="200" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Get render system for theme</p></span></div></foreignObject></g></g><g id="flowchart-F-9" class="node default"><path d="M-126.294-27h252.588v54h-252.588z" class="basic label-container" transform="translate(315.84 653)"/><g class="label" transform="translate(219.547 641)"><rect/><foreignObject width="192.588" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Create theme render target</p></span></div></foreignObject></g></g><g id="flowchart-G-11" class="node default"><path d="M-127.756-27h255.512v54h-255.512z" class="basic label-container" transform="translate(315.84 757)"/><g class="label" transform="translate(218.084 745)"><rect/><foreignObject width="195.512" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Set content in render target</p></span></div></foreignObject></g></g><g id="flowchart-H-13" class="node default"><path d="M-164.25-51h328.5V51h-328.5z" class="basic label-container" transform="translate(486.869 885)"/><g class="label" transform="translate(352.619 849)"><rect/><foreignObject width="268.5" height="72"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Call Legacy_RenderSystem.SetupXoopsTpl delegate</p></span></div></foreignObject></g></g><g id="flowchart-I-15" class="node default"><path d="M-119.25-27h238.5v54h-238.5z" class="basic label-container" transform="translate(486.869 1013)"/><g class="label" transform="translate(397.619 1001)"><rect/><foreignObject width="178.5" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Set up template variables</p></span></div></foreignObject></g></g><g id="flowchart-J-17" class="node default"><path d="M-130-51h260V51h-260z" class="basic label-container" transform="translate(657.897 1141)"/><g class="label" transform="translate(557.897 1105)"><rect/><foreignObject width="200" height="72"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Call Site.JQuery.AddFunction delegate</p></span></div></foreignObject></g></g><g id="flowchart-K-19" class="node default"><path d="M-156.431-51h312.863V51h-312.863z" class="basic label-container" transform="translate(825.016 1293)"/><g class="label" transform="translate(698.584 1257)"><rect/><foreignObject width="252.863" height="72"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Call Legacy_RenderSystem.BeginRender delegate</p></span></div></foreignObject></g></g><g id="flowchart-L-21" class="node default"><path d="M-113.213-27h226.425v54h-226.425z" class="basic label-container" transform="translate(825.016 1421)"/><g class="label" transform="translate(741.803 1409)"><rect/><foreignObject width="166.425" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Render theme template</p></span></div></foreignObject></g></g><g id="flowchart-M-23" class="node default"><path d="M-118.7-27h237.4v54h-237.4z" class="basic label-container" transform="translate(825.016 1525)"/><g class="label" transform="translate(736.316 1513)"><rect/><foreignObject width="177.4" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Output rendered content</p></span></div></foreignObject></g></g><g id="flowchart-N-24" class="node default"><path d="M-162.056-39h324.113v78h-324.113z" class="basic label-container" transform="translate(822.338 280)"/><g class="label" transform="translate(690.281 256)"><rect/><foreignObject width="264.113" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Module hooks into Legacy_RenderSystem.SetupXoopsTpl</p></span></div></foreignObject></g></g><g id="flowchart-O-25" class="node default"><path d="M-130-39h260v78h-260z" class="basic label-container" transform="translate(1164.394 280)"/><g class="label" transform="translate(1064.394 256)"><rect/><foreignObject width="200" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Module hooks into Site.JQuery.AddFunction</p></span></div></foreignObject></g></g><g id="flowchart-P-26" class="node default"><path d="M-154.238-39h308.475v78h-308.475z" class="basic label-container" transform="translate(1498.631 280)"/><g class="label" transform="translate(1374.394 256)"><rect/><foreignObject width="248.475" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Module hooks into Legacy_RenderSystem.BeginRender</p></span></div></foreignObject></g></g><g id="flowchart-Q-27" class="node default"><path d="M-130-39h260v78h-260z" class="basic label-container" transform="translate(480.281 280)"/><g class="label" transform="translate(380.281 256)"><rect/><foreignObject width="200" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Module hooks into Theme Selection</p></span></div></foreignObject></g></g></g></g></svg>


### Example Delegate Usage for Modules

To hook into the rendering process, modules can register callbacks with these delegates in their initialization:

```php
// Example of a module hooking into the template setup  
$root =& XCube_Root::getSingleton();  
$root->mDelegateManager->add('Legacy_RenderSystem.SetupXoopsTpl', array($this, 'setupTemplate'));  
  
// Method in your module class  
function setupTemplate(&$template) {  
    // Customize the template object  
    $template->register_function('my_custom_tag', array($this, 'renderCustomTag'));  
}
```

---

### Key Takeaways

The XCube delegate system is a powerful feature that allows modules to extend and customize the rendering process without modifying core files. The key delegates identified here provide integration points for modules to affect template setup, rendering initiation, JavaScript inclusion, and theme selection.

The design follows the principle of separation of concerns, where the core rendering system provides hooks (delegates) for modules to modify the process at strategic points, rather than modules having to override or duplicate core rendering code.
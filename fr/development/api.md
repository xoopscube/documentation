<dl>
  <dt>The X-Codex Documentation provides information about the XCube Core API.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">API Documentation</summary>

- XCube Core
- Environment Settings
- Kernel ( Backwards compatibility )
- Module Development
- Cubson PHP Code Generator
- Tubson web code generator
- Type Safe
- Delegate and Preload
- Interface
- Legacy : Base subsystem and Bundle Package
- Render Engine
- Theme and Templates

</details>

---

## XCube Core API

XCube core is task-oriented... [ Documentation ]




### Environment Settings

The ini file of XOOPSCube follows an inheritance pattern  
and are loaded in the following order:

1. site_default.ini
2. site_default.dist.ini
3. site_custom.ini
4. site_custom_ {XOOPS_SALT} .ini

The value read earlier is overwritten with the later setting.

#### How to get the value set in site_default.ini and site_custom.ini of XOOPSCube

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

## Kernel

Backwards compatibility [Documentation]

## Module Development

### Cubson PHP Code Generator

Cubson is a tool to generate modules for XCube.
It allows you to create quickly and easily high quality modules.
Cubson was developed by Minahito, one of the core developers of XCube.
Part of XOOPSCube's management was created using Cubson.

Good things about Cubson :

- Easy to create secure modules
- Allow users with no programming experience to create modules that work reasonably well.
- Automatically generates the tedious code for you
- Helps you cut down on module development time in a substantial way,
- Cubson generates boilerplate code, so you can create modules that are easier to understand later.

### Tubson Web Code Generator

Mumincacao created Tubson with Trust Path support.  
Kilika's website features a web version to create modules from your browser.

## Type Safe

ActionFilter and ActionForm

## Delegate and Preload

## Interface

## Legacy

Base subsystem and Bundle Package  
Backwards compatibility [Documentation]

## Render Engine

## Theme and Templates

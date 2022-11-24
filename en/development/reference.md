<dl>
  <dt>The X-Codex Documentation provides information about the Cube Core API.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Reference</summary>

- XCube Core API
- Environment Settings
- Cubson Code Generator
- Legacy compatibility
- Design Patterns
- PHP Class Abstraction
- Delegate and Preload mechanism, single file extension 
- Interface
- Render Engine
- Module Development
- Theme Design

</details>

---

## API Reference


### XCube Core

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



### Cubson PHP Code Generator 
-----

Cubson is a tool to generate modules for XOOPSCube. 
It allows you to create from SQL, high quality modules quickly and easily. 
Cubson was developed by Minahito, one of the main developers of XOOPSCube. 
Part of XOOPSCube's management was also created using Cubson.

Good things about Cubson :  

- Easy to create secure modules
- Allow users with no programming experience to create modules that work reasonably well.
- Automatically generates the tedious code for you
- Helps you cut down on module development time in a substantial way, 
- Cubson generates boilerplate code, so you can create modules that are easier to understand later.
 
Cubson was created by Minahito, and Mumincacao created Tubson with Trust Path support.  
Kilika's website features a web version to create modules from your browser. 

### Design Patterns
-----

### Class Abstraction
-----

### Delegate and Preload 
-----

### Interface
-----

### Render Engine
-----

### Module Development
-----

### Theme Design

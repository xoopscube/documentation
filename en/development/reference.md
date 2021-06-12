<dl>
  <dt>The X-Codex Documentation provides information about the Cube Core API.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Reference</summary>

- Cube Core API
- Legacy compatibility
- Design Patterns
- PHP Class Abstraction
- Delegate and Preload mechanism, single file extension 
- Interface
- Render Engine
- Module Development
- Theme Design

</details>

-----

### Cube Core API
-----

The ini file of XOOPS Cube follows an inheritance pattern  
and are loaded in the following order: 

1. site_default.ini
2. site_default.dist.ini
3. site_custom.ini
4. site_custom_ {XOOPS_SALT} .ini  

The setting value read earlier is overwritten with the later.

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
    $value  =  $root- > getSiteConfig ( 'Foo' ,  'Bar' ));    
    echo  $value ;    
// Output is Baz
```
  
_TRUST_PATH/settings/ site_custom.ini overwrites _TRUST_PATH/settings/site_default.ini.



### Legacy compatibility
-----

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

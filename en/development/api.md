<dl>
  <dt>The X-Codex Documentation provides information about the XCube Core API.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

---

## XCube Core API

The foundational Core of XoopsCube Legacy


### 📦  [API XCube Core Documentation](https://xoopscube.github.io/documentation/xcube/)


### 📦  [API Documentation XCL v2.5.x](https://xoopscube.github.io/documentation/api/)


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

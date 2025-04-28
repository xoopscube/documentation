## XCube Module

- Base system modules
- Legacy modules
- D3 Modules

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

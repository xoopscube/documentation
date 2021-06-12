<dl>
  <dt>The X-Codex Documentation provides information about the installation of XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Installation Guide</summary>

- [install-prerequisites](#install-prerequisites)
- [Quick Start](#quick-start)
- [Disk Space](#disk-space)
- [Web Server](#web-server)
- [Database](#database)
- [PHP Requirements](#php-requirements)
- [Folder Structure](#folder-structure)
- [File and folder permissions](#file-and-folder-permissions)
- [Duplicable Modules](#duplicable-modules)
- [Local Installation](#local-installation)
- [Hosting Platform](#hosting-platform)

</details>

-----

<span class="iconify" data-icon="logos:apache" data-width="48" data-height="48"></span> 
<span class="iconify" data-icon="logos:mysql" data-width="48" data-height="48"></span> 
<span class="iconify" data-icon="logos:php" data-width="48" data-height="48"></span>

### Install Prerequisites 

First, make sure you have installed [Apache](https://httpd.apache.org/docs/2.4/) or [Nginx](https://www.nginx.com/), [Mysql](https://dev.mysql.com/downloads/) or [Mariadb](https://mariadb.org/) and [PHP7](https://www.php.net/) in order to run XCL properly.  
XCL is designed to run smoothly on any local server environment bundle [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)), [MAMP](https://www.mamp.info/en/), [XAMPP](https://www.apachefriends.org/index.html).  
If you want to install PHP with IIS, the easiest way is to use [Microsoft's Web Platform Installer](https://www.microsoft.com/web/downloads/platform.aspx).

Download XCL bundle package from Github. This is everything you need to get started.

-----
### Quick Start

To install XCL for the first time, verify if the prerequisite software is installed.

?> Use the following checklist before installing XCL !

+ HTTP, MySQL and PHP running properly.
+ MySQL server name and a database for XCL installation  
(Ask your hosting provider to create one. The install wizard can do it with the proper privileges).
+ MySQL username and password with the proper database permissions.
+ FTP user account with proper permissions.
+ The ability to set the directories and files permissions (eg. chmod read/write).
+ Enable cookies and JavaScript support in your browser.

### Disk Space
A standard installation requires a minimum of 100 MB with the file mananger and wysiwyg editor. In general, with many contributed modules and themes installed, media uploaded, backups and other files, the more disk space you have, the more data you can store.

### Web Server
Apache, Nginx, Microsoft IIS or any other web server with PHP support.

### Database
MySQL or MariaDB.  
Other databases might be supported by additional modules:  
Percona Server, PostgreSQL, SQLite or Microsoft SQL Server and Oracle.

### PHP requirements

PHP 7.2 is recommended for XCL 2.3.0  
Some individual modules may have specific requirements and configurations  
needed (eg. WebPhoto), please refer to the module documentation as well.

PHP memory requirements can vary significantly depending on the modules in use on your site.  
The minimum recommended value of PHP memory_limit is 64MB. If you can, change it to 128MB,  
since PHP memory_limit is a per-script setting.

### Folder Structure

XCL is designed to work exactly as the directory structure organized in the unzipped package.
It is critical that you do not move nor rename any folder or file under "html". You need to know your web root directory (eg. public_html) to put all its content. The unzipped package will contain two directories that must be deployed or manually upload :

<span class="iconify" data-icon="flat-color-icons:opened-folder" data-width="24" data-height="24"></span> Public HTML
```
html
├── class  
│   ├── database   [ factory, mysql, sqlutility ]  
│   ├── mail       [ phpmailer ]  
│   ├── smarty     [ moved to trust path ]  
│   ├── xml        [ rpc, rss, parser ]  
│   └── xoopsform  [ abstract base class for forms ]  
├── common         [ javascripts shared locally ]  
├── core           [ XCube, XCube IniHandler class ]  
├── images         [ system banners, icons, logos ]  
├── include        [ cube core init and legacy backwards compatibility ]  
├── kernel         [ interface for handling general configurations ]  
├── language       [ system translations ]  
├── modules        [ system, render, filemanager and wysiwyg editor ]  
├── preload        [ single-file custom extensions ]  
├── themes         [ frontend and backend gui ]  
└── uploads        [ moved to trust path ]  
```
<span class="iconify" data-icon="flat-color-icons:opened-folder" data-width="24" data-height="24"></span> Trust Path
```
trust_path  
├── cache          [ application cache data - can be deleted without data loss ]  
├── libs           [ shared libraries ]  
├── modules        [ D3 modules, secure and duplicable ]  
│   ├── pico       [ Content edition with granular permissions ]  
│   ├── protector  [ application security module ]  
│   ├── xelfinder  [ file manager with multi-root and cloud storage support ]  
│   └── xupdate    [ download and update modules, themes and preloads ]  
├── PEAR           [ PEAR - "PHP Extension and Application Repository ]  
├── settings       [ XCube ini file uses an inheritance pattern. ]  
├── themplates_c   [ the generated templates - can be deleted without data loss ]  
├── uploads        [ read ]  
└── .htaccess      [ read ]  
```
?> The folder TRUST_PATH can be renamed to whatever name you wish.

### File and folder permissions

XCL install wizard will check required read and write access to :  
+ */uploads/
+ */trust_path/cache/
+ */trust_path/templates_c/
+ */trust_path/uploads/

These folders are used to store cached files, templates, images and any file uploads  
through the File-manager or packages delivered by the X-Update manager interface.

### Duplicable Modules

XCL can run many public instances of a single _duplicable module_ (D3) from your TRUST_PATH. The concept is to secure a duplicable module by moving all of the module’s PHP files out of web root or DOCUMENT_ROOT.

!> The module name under the TRUST_PATH can not be changed. But the new instance name will be automatically prefixed onto all elements, templates and MySQL tables.

### Local Installation

If you're running a local environment for development or testing, make sure that you have met the previous requirements. Once it is done :

+ copy the contents of the HTML directory to the root document path of your web environment.
+ copy the contents of the TRUST_PATH directory to the root document path of your web environment.
+ Create a database

Once the files are copied there, you can point your browser to http://localhost/

This will start the install wizard process.

### Hosting platform

Since XCL is server based, we try to make it easy to install and run on most hosting platforms. XCL is designed to be installed and to run with web server minimum requirements. Most web hosting providers meet these requirements. However, many shared hosting providers choose to disable PHP modules and extensions: cURL, .htaccess support, mod rewrite. Consider selecting one hosting provider without such limits and restrictions.

If you're running in a hosted environment, unpack the XCL files locally or on the server if you have CPanel, telnet or SSH access.

Once this is done :

+ copy the contents of the HTML directory to the root document path of your web environment*
+ copy the contents of the TRUST_PATH directory to the root document path of your web environment.
+ Create a database

Once the files are copied there, you can start the install by typing http://my-site-domain.com/

This will start the install process.

* your provider usually provides this location with directions.

!> Disclaimer : The minimum requirements of XCL can be subject to change, given the recent development of PHP and MySQL.

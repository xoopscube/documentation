<dl>
  <dt>The X-Codex Documentation provides information about the installation of XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Installation Guide</summary>

- [Server Requirements](#requirements) and default PHP Extensions.
- [Quick Start](#quick-start) fundamentals of the folder structure and the installation wizard.
- [Apache Settings](#apache-settings) recommended for performance.
- [Nginx Settings](#nginx-settings) tunning for performance.
- [Free SSL Certificate](#free-ssl-certificate) get a free SSL certificate in minutes.
- [Download](#download) zip archive or clone the git repository.
- [Upgrading](#upgrade) to the latest release.

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

**GUI Installation Wizard**

1. Download [XCL 2.3.x](#download)
2. Decompress and upload the files to your public html directory
3. Set up a database (utf-8), username and password
4. Open your domain in the web browser (eg. https://domain.com/)
5. Complete the steps in the GUI Installation Wizard

?> The first step of the installation wizard checks the configuration and the prerequisites for MySQL and PHP extensions. The second step installs the modules.

**XCL Dashboard**

The XCL Dashboard provides administrators with a quick overview of the server system.

Example of the most relevant information about your installation.

+ XCL Version : XCL 2.3.0 Alpha
+ Default theme : xcl_default
+ Default template set : default
+ Default language : english
+ Debug mode : PHP Debug
+ Operating System : Linux
+ Server : Apache/2.4.10 (Debian)
+ User Agent : AppleWebKit(KHTML, like Gecko), Chrome, Mozilla, Safari
+ PHP Version : 7.2.0
+ MYSQL Version : 5.6.34
+ **PHP Settings**
+ Safe Mode : Off
+ Max. execution time : 300 sec.
+ Memory Limit : 128Mb
+ Display Errors : Off
+ Short Open Tags : Off
+ File Uploads : On ( Upload Max File Size:64M, Post Max Size:64M )
+ Magic Quotes : Off
+ Register Globals : Off
+ Output Buffering : On
+ Open BaseDir : Off
+ Allow url_fopen : On (recommended OFF)
+ Dom extension : Yes
+ Exif extension : Yes
+ Gettext extension : Yes
+ JSON extension : Yes
+ XML enabled : Yes
+ Curl extension : Yes
+ Zlib enabled : Yes
+ Soap extension : Yes
+ Mbstring enabled : Yes
+ Iconv available : Yes

!> Note: If you want to upgrade an existing XCL installation, see [Upgrading to XCL 2.3.x](#upgrade)


**PHP extensions**

+ [Curl](https://curl.haxx.se/)
+ [Curl - PHP book](https://www.php.net/manual/en/book.curl.php)
+ [DOM](https://www.php.net/manual/en/book.dom.php)
+ [Exif](https://www.php.net/manual/en/book.exif.php)
+ [GD](https://www.php.net/manual/en/book.image.php)
+ [Gettext](https://php.net/manual/en/book.gettext.php)
+ [iconv](https://www.php.net/manual/en/function.iconv.php)
+ [Json](https://www.php.net/manual/en/book.json.php)
+ [Mbstring ](https://www.php.net/manual/en/book.mbstring.php)
+ [OpenSSL](https://www.php.net/manual/en/book.openssl.php)
+ [PDO](https://www.php.net/manual/en/book.pdo.php)
+ [PDO MySQL](https://php.net/manual/en/ref.pdo-mysql.php)
+ [Soap](https://www.php.net/manual/en/book.soap.php)
+ [XML Parser](https://www.php.net/manual/en/book.xml.php)
+ [Zlib](https://www.php.net/manual/en/book.zlib.php)

Please note, some OS distributions can require you to manually install and configure the PHP JSON and XML extensions. For example, when using Ubuntu this can be done via _apt-get install php7.2-json_ and _apt-get install php7.2-xml_ respectively.

?> These PHP extensions are often enabled by default. Extensions should match the PHP version.

### Recommended PHP configuration settings

Setting: **session.cache_limiter = nocache**

Setting: **session.auto_start = 0**

Setting: **expose_php = off**  
Recommended by PHP Security consortium, [read more](http://phpsec.org/projects/phpsecinfo/tests/expose_php.html)

Setting: **allow_url_fopen = off**
Recommended by PHP Security consortium, [read more](http://phpsec.org/projects/phpsecinfo/tests/allow_url_fopen.html)

Setting: **magic_quotes_gpc = off**  
Reason: Forces quotes in variables - This feature has been *deprecated* as of PHP 5.3.0 and *removed* as of PHP 5.4.0.

Setting: **register_globals = off**  
Reason: Security issue - having this enabled subjects PHP variables to input from any source:
This feature has been *deprecated* as of PHP 5.3.0 and *removed* as of PHP 5.4.0.

Setting: **display_errors = Off**  
Reason: Hides errors output to display (website) we want to send to log file instead.

### Memory requirements

Minimum recommended value of PHP memory_limit.
PHP memory requirements can vary significantly depending on the modules in use on your site.  
XCL core requires 32MB.
PHP memory_limit is a per-script setting
PHP.net’s documentations puts it this way:

This sets the maximum amount of memory in bytes that a script is allowed to allocate. This helps prevent poorly written scripts for eating up all available memory on a server...
Source: http://php.net/manual/en/ini.core.php#ini.memory-limit

Unlike say MySQL’s key_buffer_size or innodb_buffer_pool settings, PHP memory_limit setting is not a storage space where multiple PHP scripts pool from or grow within. Rather it’s a per-script limit. PHP memory_limit is the maximum amount of server memory a single PHP script is allowed to consume. When blocked, the resulting error output looks something like this:

Fatal error: Allowed memory size of x bytes exhausted (tried to allocate x bytes) in /path/to/php/script
or like this:

PHP Fatal error: Out of memory (allocated x) (tried to allocate x bytes) in /path/to/php/script
So for example, if two or more scripts are requested simultaneously, each is completely independent from the other. They do not share the memory_limit setting. Remember PHP is not designed for and does not support multithreading. Thus, if five (5) PHP scripts are simultaneously using 100MB each, that would total 500MB of PHP memory usage, and a PHP memory limit of 128M wouldn’t be hit.

That said, for scripts which request other PHP scripts inline using require, include or include_once, this limit is then inherited and shared by all included scripts that are dependent on the parent script.

The include statement takes all the text/code/markup that exists in the specified file and copies it into the file that uses the include statement. The require() function is identical to include(), except that it handles errors differently. If an error occurs, the include() function generates a warning, but the script will continue execution. The require() generates a fatal error, and the script will stop.

...The require_once() statement is identical to require() except PHP will check if the file has already been included, and if so, not include (require) it again.
Source: https://www.w3schools.com/php/php_includes.asp | http://php.net/manual/en/function.require-once.php

Now regarding the original example mentioned in the outset. A lower setting of 128M is always better because if there are PHP scripts trying to use more than 128M, those scripts would now return memory limit exceeded errors. In the above issue that was not the case, so regardless of 128M or 1G memory_limit setting it only comes into play if there’s inefficient script(s).

Warning messages will be shown if the PHP configuration does not meet these requirements. However, while these values may be sufficient for a default installation, a production site with a number of commonly used modules enabled could require more memory. *Typically 128 MB or 256 MB are found in production systems.* Some installations may require much more, especially with media-rich implementations. If you are using a hosting service it is important to verify that your host can provide sufficient memory for the set of modules you are deploying or may deploy in the future. (See the page *Troubleshooting* and knowledge base for additional information on modifying the PHP memory limit.)

### Enable caching

Within the XCL interface, it is highly recommended that caching be enabled under *admin/config/development/performance*. This will help increase the performance of your XCL installation and the end user experience. For more details see[ Standard Cache to improve performance](/en/knowledge-base.md).

## Extensions

### Database extensions

The PHP extension for connecting to your chosen database must be installed and enabled. XCL's currently supported database connectors are: [mysql](http://www.php.net/manual/en/ref.mysql.php) (the original MySQL extension), [mysqli](http://www.php.net/manual/en/mysqli.summary.php) (an improved connector for newer MySQL installations).  
Support for [pgsql](http://www.php.net/manual/en/ref.pgsql.php) (for PostgreSQL).  

!> Note: PHP 5.x no longer enables the mysql extension by default.  
Please read the links above for installing and enabling your chosen connector.

### PHP Data Objects (PDO)

The extension is normally enabled by default in a standard PHP installation.


### XML extension

PHP [XML extension](http://www.php.net/manual/en/ref.xml.php) (for API, XCL, Blog and Ping modules).  
This extension is [enabled by default](http://www.php.net/manual/en/ref.xml.php#xml.installation) in a standard PHP installation; the Windows version of PHP has built-in support for this extension. Enabling the XML extension also enables PHP DOM. DOM is now a systems requirement.

### Image library

An image library for PHP such as the [GD library](http://www.php.net/gd) is needed for image manipulation (resizing user pictures, image and imagecache modules). GD is included with PHP and usually enabled by default.  
GD is a *required* extension in XCL 2.3.0 and later.  
[ImageMagick](http://www.imagemagick.org/script/index.php) is also supported for basic image manipulations in filemanager.

If you have administrator rights on a Debian/Ubuntu server, and GD is *not* already available see your phpinfo it can usually be installed by running the following command:

```
sudo apt-get install php5-gd
```

or on Redhat/Centos:

```
sudo yum install php-gd
```

See the [ImageMagick install instructions](http://www.imagemagick.org/script/binary-releases.php) for your platform if you want that.

### OpenSSL

The [PHP OpenSSL](http://php.net/manual/en/book.openssl.php) extension is recommended to allow requests using HTTPS.  
Some platforms provide a separate OpenSSL package, e.g. php55-openssl.

There is also ongoing work to make X-Update module check for updates using HTTPS, which makes this a requirement.

### JSON

XCL 2.3.0 requires PHP compiled with JSON. JSON support is normally compiled as part of PHP core, but in case you're getting errors like 
```
PHP Fatal error: Call to undefined function ...json_encode()...
```
 try [adding the JSON extension](http://ca2.php.net/manual/en/json.installation.php).

### cURL

The [PHP cURL](http://php.net/manual/en/book.curl.php) extension is required for updates and some contributed modules.  
Many Linux distributions and development stacks will have it enabled by default, but if your system doesn't, here are instructions on how to enable it for various platforms are below.

#### Windows - XAMPP

Open 
```
C:/xampp/php/php.ini
```
 in a text editor.

Uncomment the 
```
extension=php_curl.dll
```
 line by removing the preceding ";".

#### Linux - Ubuntu/Debian

Run 
```
sudo apt-get update && sudo apt-get install php5-curl
```
.

If you need to enable it, run 
```
sudo php5enmod curl
```
.

### Mbstring

The [PHP mbstring](http://php.net/manual/en/intro.mbstring.php) extension provides multibyte specific string functions used for multilingual sites in XCL. It helps deal with multibyte encodings in PHP and also handles Unicode based encodign like UTF-8.

It can be installed in Linux systems depending on OS, eg: for Debian based system:

```
sudo apt-get install php7.0-mbstring
```

### APC

XCL runs with recent versions of APC.

### ssh extension

The _ssh_ [PECL extension](https://pecl.php.net/package/ssh2) is an optional add-on to your PHP setup. But it is not required for normal installation.

## Other

### .htaccess settings

Some settings are contained in the default .htaccess file that can be edited from Admin Preferences. 

Note, however, that setting PHP configuration options from .htaccess only works under the following conditions:

- With Apache (or a compatible web server)
- If the .htaccess file is actually read, i.e. [AllowOverride All](http://httpd.apache.org/docs/current/mod/core.html#allowoverride) in the main Apache configuration (usually httpd.conf) is enabled
- If PHP is installed as an Apache module

In some shared hosting environments, access to these settings is restricted. If you cannot make these changes yourself, please ask your hosting provider to adjust them for you.

### Other interfaces

See the [PHP manual](http://www.php.net/manual/en/configuration.changes.php#configuration.changes.other) for how to change configuration settings for other interfaces to PHP.

### SALT Random Generation

GUI install wizard.

### xdebug

If using xdebug:

Setting: **xdebug.show_exception_trace = 0**  
in case of installer crash.

Setting: **xdebug.max_nesting_level = 256**  
if the default max_nesting_level of 100 causes any crash.

### PHP requirements details

Learn how to use phpinfo to get the details of your system. For example, phpinfo will tell you if you have a database already installed and what versions of PHP, MySQL, etc. your system is running. Phpinfo will also tell you what PHP variables are set as well as many other helpful things.

It is often possible to update to a newer version of PHP than ships with your Linux distribution. For RHEL, we recommend [IUS Community Project](https://ius.io/), and for Debian, [https://deb.sury.org/](https://deb.sury.org/).

The Drupal 7 Update manager can install/update modules and themes via SSH if the required libraries have been installed on the server. SSH is *not* always available, see your phpinfo it can usually be installed by executing:

```
apt-get install libssh2-php
```

- Drupal 7 may require the time parameter ( _max_execution_time_ ) to be at least 30 seconds.
- APC installation guides sometimes recommend setting  _apc.include_once_override=1_ . This can cause a white screen, error 500.  
- The following PHP extensions are required for Drupal 7:

```
$required_extensions = array( 'date', 'dom', 'filter', 'gd', 'hash', 'json', 'pcre', 'pdo', 'session', 'SimpleXML', 'SPL', 'xml', ); 
```

### A shortlist based on above:
section

| PHP version | Min rec 5.4 |
| allow_url_fopen | must be OFF or nonexistent |
| display_errors | off | 
| coremax_execution_time | min 30 seconds |

expose_phpmust be OFF or nonexistent

memory_limit 32MB

ctype ctype functions

cURL cURL support

cURL libSSH Version required for install update

date date/time support enabled

dom DOM/XML enabled 

fileinfo fileinfo support

filter Input Validation and Filtering enabled

gd GD Support enabled

? magic_quotes_gpc must be OFF or nonexistent

? magic_quotes_runtime must be disabled or nonexistent

? safe_mode must be disabled or nonexistent

? register_globals must be OFF or nonexistent

hash hash support enabled

openssl openssl support enabled

json json support enabled

pcre PCRE (Perl Compatible Regular Expressions) Support enabled

pdo PHP Data Objects(PDO) (specific for your database)

pecl PECL version of PDO not compatible

session Session Support enabled

session session.auto_start 0 

session session.cache_limiter nocache

SimpleXML Schema support enabled
SPL SPL support lots

Suhosin APC.include-once-override avoid

Tokenizer Tokenizer Support 

XML XML Support enabled

XML XML Namespace Support enabled

Zend OPcache Opcode caching 

Zend OPcache PHP 5.5+ opcache.save_comments

Zend OPcachePHP 5.5+ opcache.load_comments

MODULE TESTING memory_limit



### Coding Style Guide

Programming style, also known as code style, is a set of rules or guidelines used when writing the source code for a computer program. It is often claimed that following a particular programming style will help programmers read and understand source code conforming to the style, and help to avoid introducing errors.

+ Some of existing files doesn't follow this guideline.
+ Most files are improved to follow this guideline.
+ Module developers don't need to follow this guideline, because the guideline of XCube is different from common PHP coding style.

| Namespace | **Pascal** |XCube, Legacy, User, FoonyD  |
|---|---|---|
| Class | **Pascal** | Object, Controller, ObjectHandler |
| Abstract class |'Abstract' + {Class}  | AbstractAction, AbstractObject |
| **Real Classname** | {Namespace} + '_' + {Class} | Legacy_ObjectHandler |
| member Property | m + **Pascal** (or) '_m' + **Pascal** | $mName, $mHandler, $mRealName |
| method | **camel** | execute(), getName(), convertFromIntToFloat() |
| hidden method | _ + **camel** | _notifyRemove(), _getInnerStatus() |
| delegate | m + **Pascal** | getObject() --> $mGetObject |
| method parameter | **camel** | function bar(&$obj, $isForce); |
| local variables | **camel** (or) {prefix} + '_' + **camel** | $name, $showFlag, $t_nameList |

-----
### Apache Settings

Recommended settings for performance... We all know and love Apache.  It’s great, it allows us to run websites with minimal configuration and administration.

However, this same ease of flexibility and lack of tuning is typically what leads Apache to becoming a memory hog.  Follow these easy tips and gain a significant performance boost from Apache.

**1. Remove Unused Modules**

Save memory by not loading modules that you do not need, including but not limited to : 
mod_php, mod_ruby, mod_perl, etc.

**2. Use mod_disk_cache NOT mod_mem_cache**

mod_mem_cache will not share its cache among different apache processes, which results in high memory usage with little performance gain since on an active server, mod_mem_cache will rarely serve the same page twice in the same apache process.

**3. Configure mod_disk_cache with a flat hierarchy**

Ensure that you are using CacheDirLength=2 and CacheDirLevels=1 to ensure htcacheclean will not take forever when cleaning up your cache directory.

**4. Setup appropriate Expires, Etag, and Cache-Control Headers**

To utilize your cache, you must tell it when a file expires, otherwise your client will not experience the caching benefits.

**5. Put Cache on separate disk**

Place your cache on a separate physical disk for fastest access without slowing down other processes.

**6. Use Piped Logging instead of direct logging**

Directly logging to a file has issues when you want to rotate the log file.  It must restart apache to use the next log file.  This will cause significant slowness for your users during the restart.  Particularly if you are using Passenger or some other app loader.

**7. Log to a different disk than disk serving pages**

Put your logs on physically different disks than the files you are serving.

**8. Utilize mod_gzip/mod_deflate**

Gzip your content before sending it off and then the client will ungzip upon receipt, this will minimize the size of file transfers, it generally will help all user experience.

**9. Turn HostnameLookups Off**

Stop doing expensive DNS lookups.  You will rarely ever need them and when you do, you can look them up after the fact.

**10. Avoid using hostname in configs**

If you have HostnameLookups off, this will prevent you from having to wait for the DNS resolve of the hostnames in your configs, use IP addresses instead.

**11. Use Persistent Connections**

Set KeepAlive on and then set KeepAliveTimeout and KeepAliveRequests.  KeepAliveTimeout is how long apache will wait for the next request, and KeepAliveRequests is the max number of requests for a client prior to resetting the connection.  This will prevent the client from having to reconnect between each request.

**12. Do Not set KeepAliveTimeout too high**

If you have more requests than apache children, this setting can starve your pool of available clients.

**13. Disable .htaccess**

Example:
```apache
AllowOverride None
```
!> This will prevent apache from having to check for a .htaccess file on each request.

**14. Allow symlinks**

Example:
```apache
Options +FollowSymLinks -SymLinksIfOwnerMatch.  
```
!> Otherwise, apache will make a separate call on each filename to ensure it is not a symlink.

**15. Set ExtendedStatus Off**

Although very useful, the ExtendedStatus will produce several system calls for each request to gather statistics.  Better to utilize for a set time period in order to benchmark, then turn back off.

**16. Avoid Wildcards in DirectoryIndex**

Use a specific DirectoryIndex, i.e. index.html or index.php, not index.

**OS Specifics**

**17. Increase Swappiness**

Particularly on single site hosts this will increase performance. 

On linux systems increase /proc/sys/vm/swappiness to at least 60 if not greater.

!> This will try to load as many files as possible into the memory cache for faster access.

**18. Increase Write Buffer Size**

Increase your write buffer size for tcp/ip buffers.  

On linux systems increase /proc/sys/net/core/wmem_max and /proc/sys/net/core/wmem_default. 

If your pages fit within this buffer, apache will complete a process in one call to the tcp/ip buffer.

**19. Increase Max Open Files**

If you are handling high loads increase the number of allowed open files.  

On linux, increase /proc/sys/fs/file-max and run ulimit -H -n 4096.

**Application Specifics**

**20. Setup Frontend proxy for images and stylesheets**

Allow your main web servers to process the application while images and stylesheets are served from frontend webservers

**21. Use mod_passenger for rails**

mod_passenger is able to share memory and resources among several processes, allowing for faster spawning of new application instances.  It will also monitor these processes and remove them when they are unnecessary.

**22. Turn off safe_mode for php**

It will utilize about 50-70% of your script time checking against these safe directives. 

Instead configure open_base_dir properly and utilize plugins such as mod_itk.

**23. Don’t use threaded mpm with mod_php**

Look at using mod_itk, mod_php tends to segfault with threaded mpm.

**24. Flush buffers early for pre render**

It takes a relatively long time to create a web page on the backend, flush your buffer prior to page completion to send a partial page to the client, so it can start rendering. 

A good place to do this is right after the HEAD section – so that the browser can start fetching other objects.

**25. Use a Cache for frequently accessed data**

memcached is a great for frequently used data and sessions.  It will speed up your apache render time as databases are slow.

?> And one more tip.  

Your Apache performance is only as good as your benchmarks measuring it.  If you can’t get numbers or a graph to show that your performance has increased or load decreased, then you don’t know if your tuning has done you any good.  A great way to ensure that you are performing better than before is to use these techniques to hook up apache monitoring to your hosted monitoring.

Do you know more tips? Disagree with some of the tips? Please share your comments on [Github](https://github.com/xoopscube/xcl/issues).

-----
### Nginx Settings

**Tuning NGINX for Performance**

NGINX is well known as a high‑performance load balancer, cache, and web server, powering over 40% of the busiest websites in the world. For most use cases, default NGINX and Linux settings work well, but achieving optimal performance sometimes requires a bit of tuning. This blog post discusses some of the NGINX and Linux settings to consider when tuning a system.

[Read more](https://www.nginx.com/blog/tuning-nginx/)

-----
### Free SSL Certificate

Get a free SSL certificate in minutes

**Let’s Encrypt** is a collaborative project with Linux Foundation and new certificate authority sponsored by Mozilla, Akamai, SiteGround, Cisco, Facebook, etc. which offers SSL Certificate in free.

This is great to save cost to get it implemented in a non-production environment.

It’s automated that means you don’t have to spend time in creating CSR and send to CA authority to get it signed. It all happens in the background on your web servers.

https://letsencrypt.org/

**SSL For Free** use Let’s Encrypt ACME server by using domain validation to provide you a certificate. It’s 100% free, and certs are issued within minutes.

https://www.sslforfree.com/


**Cloud Flare** is CDN & Security Company. They make your website faster and secure. Cloud Flare power many popular sites including Reddit, yelp, Mozilla, StackOverflow, etc.

Recently, Cloud Flare announced universal SSL in free for all the users. That’s right even if you are in the free plan. If you are using Cloud Flare and SSL is not yet activated then here is how you can do it quickly.

+ Login into Cloud Flare
+ Select the website you want to enable SSL
+ Click on Crypto icon
+ Ensure it’s configured as “Flexible” and status shows as “ACTIVE CERTIFICATE.”

https://www.cloudflare.com/

-----
### Download

Download the default package from github:

> https://github.com/xoopscube/xcl/releases

Or with clone the master branch :

```git
$ glit clone https://github.com/xoopscube/xcl.git
```

The repository contains everything needed to install either a local or online installation of XCL. 
After download, just follow the steps of the GUI Installation Wizard. 

A remote installer script can be used with a hosting environment for automated installation. 

XCL installer is available in the following format.

```git
$ git clone https://github.com/xoopscube : installer
```

-----
### Upgrade

The upgrade from an existing XOOPSCube Legacy 2.2.x takes advantage of the functionality enhancements in XCL 2.3.x. 
For details, check what's new in release notes or **XCL 2.3.0 CHANGELOG**

XCL 2.3.0 provides a seamless upgrade for implementations. A simply GUI wizard to upgrade and update from Admin dashboard. The upgrade GUI Installation Wizard will update the installation and retain the 2.x.x customizations in the new XCL 2.3.0 application.

?> Note: If the 2.x.x is a full install, then a 2.3.0 version will represents a full install (with all required modules). Upgrading a minimal installation takes less time due to fewer modules.

Every XOOPSCube Legacy 2.2.x upgrade should complete the following steps:

+ Back up all existing settings and SQL data for the XCL 2.x.x
+ Deactivate (stop) any modules (for example, protector) that are currently running in the 2.x.x installation.
+ Install-upgrade XCL 2.3.0 package. 

!> Download XCL and install-upgrade locally to prevent any issues on the production environnment. After the local test, deploy the application to the production environnment.
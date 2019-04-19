<dl>
  <dt>The X-Codex Documentation provides information about the installation of XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Installation Guide</summary>

- [Server Requirements](#requirements) and default PHP Extensions
- [Quick Start](#quick-start) : installation wizard
- [Apache Settings](#apache-settings) : Recommended configuration for performance
- [Nginx Settings](#nginx-settings) : Tunning for performance
- [Free SSL Certificate](#free-ssl-certificate) : Get a free SSL certificate in minutes
- [Download](#download) : clone the git repository or download a zip archive
- [Upgrading](#upgrade) to the latest release  

</details>

-----

### Requirements 

<span class="iconify" data-icon="logos:apache" data-width="32" data-height="32"></span> 
<span class="iconify" data-icon="logos:mysql" data-width="32" data-height="32"></span> 
<span class="iconify" data-icon="logos:php" data-width="32" data-height="32"></span>

First, make sure you have installed [Apache](https://httpd.apache.org/docs/2.4/) or [Nginx](https://www.nginx.com/), [Mysql](https://dev.mysql.com/downloads/) or [Mariadb](https://mariadb.org/) and [PHP7](https://www.php.net/).

XCL runs on any local server environment bundle [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)), [MAMP](https://www.mamp.info/en/), [XAMPP](https://www.apachefriends.org/index.html).

If you want to setup PHP and are using IIS, the easiest way is to use [Microsoft's Web Platform Installer](https://www.microsoft.com/web/downloads/platform.aspx).

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

-----
### Quick Start

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

The upgrade from an existing XOOPS Cube Legacy 2.2.x takes advantage of the functionality enhancements in XCL 2.3.x. 
For details, check what's new in release notes or **XCL 2.3.0 CHANGELOG**

XCL 2.3.0 provides a seamless upgrade for implementations. A simply GUI wizard to upgrade and update from Admin dashboard. The upgrade GUI Installation Wizard will update the installation and retain the 2.x.x customizations in the new XCL 2.3.0 application.

?> Note: If the 2.x.x is a full install, then a 2.3.0 version will represents a full install (with all required modules). Upgrading a minimal installation takes less time due to fewer modules.

Every XOOPS Cube Legacy 2.2.x upgrade should complete the following steps:

+ Back up all existing settings and SQL data for the XCL 2.x.x
+ Deactivate (stop) any modules (for example, protector) that are currently running in the 2.x.x installation.
+ Install-upgrade XCL 2.3.0 package. 

!> Download XCL and install-upgrade locally to prevent any issues on the production environnment. After the local test, the application can be deployed to the production environnment.
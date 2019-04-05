<dl>
  <dt>The X-Codex Documentation provides information about the installation of XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Installation Guide</summary>

- Prerequisites : LAMP. Apache or Nginx, MySQL or Maria and PHP 7.x.x
- Download : clone the git repository or downloading a zip archive
- Upgrading to the latest release  
- Setting up through GUI Installation Wizard
- Remotely Update
- Users and groups permissions
- Customizing XCL.

</details>

-----

### Prerequisites
-----

Prerequisites **To get started quickly.**

+ Make sure you have LAMP installed Apache or Nginx, MySQL or Maria and PHP 7.x.x
+ Download XCL 2.3.0
+ Set up a database (utf-8)
+ Follow the steps of the GUI Installation Wizard

!> Note: If you want to upgrade an existing XCL installation, see Upgrading to XCL 2.3.0

**Requirements to run XCL web app**

+ apache
+ mysql
+ php
+ [ list of PHP extensions required ]

**Configuration**

**Server**

Check your server settings

**Apache**

Settings recommended ...

**Nginx**

Settings recommended ...

**PHP extensions**

+ extension
+ extension
+ extension
+ extension

### Download
-----

Download the default package from github: https://github.com/xoopscube

```md
url to release
```
Or with git clone:

```md
$ glit clone -repository-name
```

The repository contains everything needed to install either a local or online installation of XCL. 
After download, just follow the steps of the GUI Installation Wizard. Another script can be used with a hosting environment for automated installation. XCL is available in the following pre-packaged formats.

```md
$ git clone ....
Download Formats
```

### Upgrading
-----
The upgrade from an existing XOOPS Cube Legacy 2.2.x takes advantage of the functionality enhancements in XCL 2.3.x. 
For details, see **What's New in XCL 2.3.0**

XCL 2.3.0 provides a seamless upgrade for implementations. A simply GUI wizard to upgrae and update from Admin dashboard. The upgrade GUI Installation Wizard will update the installation and retain the 2.x.x customizations in the new XCL 2.3.0 application.

?> Note: If the 2.x.x is a full install, then a 2.3.0 version will represents a full install (with all required modules). Upgrading a minimal installation takes less time due to fewer modules.

Every XOOPS Cube Legacy 2.2.x upgrade should complete the following steps:

+ Back up all existing settings and SQL data for the XCL 2.x.x
+ Deactivate (stop) any modules (for example, protector) that are currently running in the 2.x.x installation.
+ Install-upgrade XCL 2.3.0 package. 

!> Download XCL and install-upgrade locally to prevent any issues on the production environnment. After the local test, the application can be deployed to the production environnment.

### Install Wizard
-----
XCL is really easy to get started with. The GUI Installation Wizard requires some information:

+ localhost
+ database
+ username
+ path
+ ...

### Remote Update
-----
The X-upgrade module provides an intuitive GUI to update and install new modules, preloads extensions and themes. X-update is the easy way to access multiple developers repositories from the Admin dashboard. Select the packages (modules, themes) to install and click Update. X-update runs like a downloader manager.

### Permissions
-----
Users Roles and Groups Permissions

### Customizing XCL
-----

**Cache**

Fast render content !

**SSL**

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





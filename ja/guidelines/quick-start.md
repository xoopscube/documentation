### Introduction

Before we can dive in to XCL, first we have to set up our development environment. For many articles and tutorials, setting up a development environment for Linux, Mac or Windows can be difficult and you are left stuck before you even begin. Whether you’re working on Windows, Mac, or Linux, if your development environment is not the same as your production environment small differences in environment might lead to some bugs. Beginners finding themselves in such scenario - “It’s broken” - tend to follow their fear of missing the hype train of 'DevOps', of containers like Docker or Vagrant and add more layers to the problem. Following the hype of new tools and concepts to “deploy to the cloud”, they end up in the worst situations, the most complicated and insoluble scenarios. Meanwhile, there is still a simple approach, an easy-to-use solution : install a virtual machine ensuring parity between development and production environments.

### Get Started

Installing a server application (like XCL) or LAMP (Linux/Apache/MySQL/PHP) development environment, it’s not harder. Using a virtualization platform like VirtualBox, you can simply start a virtual machine image whenever you want to use or develop a web application. The virtual machine is completely isolated from your work and the software installed on your machine. So there are no additional libraries, databases, and runtimes to deal with, nor risks to your desktop environment.

### Virtual Machine

Bitnami LAMP stack virtual machines contain a minimal Linux operating system with LAMP installed and configured. Using the Bitnami Virtual Machine image requires hypervisor software such as VMware Player or VirtualBox. Both of these hypervisors are available free of charge.

+ Try, test and work with the application in your local environment.
+ Completely isolated environment. 
+ A perfect sandbox for your project.

Download the VirtualBox 6.0.4 platform package and the VirtualBox 6.0.4 Extension Pack - support for USB 2.0 and USB 3.0 devices, VirtualBox RDP, disk encryption, NVMe and PXE boot for Intel cards.
https://www.virtualbox.org/wiki/Downloads

!> Install the same version extension pack as your installed version of VirtualBox.

Download the Bitnami LAMP virtual machine

LAMP 7.2.16-0 (Development)	64-bit	651 MB

https://bitnami.com/redirect/to/478314/bitnami-lampstack-7.2.16-0-linux-debian-9-x86_64.ova

LAMP 7.3.3-0 (Development)	64-bit	652 MB

https://bitnami.com/redirect/to/479414/bitnami-lampstack-7.3.3-0-linux-debian-9-x86_64.ova

A LAMP stack gives you a pre-configured environment that you can start using right away. Bitname is just an example: there are other virtual appliances to choose from, and they’re all equally easy to set up.

Here are the steps you’ll follow in the next tutorial:

+ Launch a virtual machine with VirtualBox
+ Log in and install XCL

The next sections will walk you through these steps in detail.

?> **NOTE** : This tutorial assumes that you have already downloaded and installed VirtualBox for your platform.

Step 1: Launch A Virtual Machine

At the end of this step, you will have launched a virtual machine.

Begin by downloading a virtual machine as a .ova file. 

Once downloaded, follow these steps:

+ Launch VirtualBox
+ Select the “File -> Import Appliance” menu option in VirtualBox
+ Select the .ova file downloaded
+ Click “Continue” to proceed
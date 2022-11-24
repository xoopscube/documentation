<dl>
  <dt>The X-Codex Documentation provides information about how to install, configure, deploy and use XCL.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences: This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Table of Contents</summary>

- [Overview](#overview) — Web Application Platform and Content Management System.
- [XCube core](/en/development/xcube-core.md#xcube-core-concept) — Xcube Core concept and subsystems.
- [XCube Architecture](/en/development/xcube-core.md#xcube-development) — Simple, Secure and Scalable.
- [XCube Subsystem](/en/development/xcube-core.md#xcube-subsystem) — Base subsystem.
- [Exchangeable](/en/development/xcube-core.md#exchangeable) — inheritance, OOP polymorphism and type-safe code.
- [XCube Namespace](/en/development/xcube-core.md#xcube-namespace) — concept implemented when PHP did not provide any.
- [Delegate Manager](/en/development/xcube-core.md#delegate-manager) — delegate managers and controllers.
- [Preload](/en/development/xcube-core.md#delegate-manager) — preload mechanism, single file component.
- [Type Safe](/en/development/xcube-core.md#type-safe)
- [Action Form](/en/development/xcube-core.md#action-form)
- [Virtual Service](/en/development/xcube-core.md#virtual-service)
- [Render Engine](/en/development/xcube-core.md#render-engine)
- [Multi-render](/en/development/xcube-core.md#multi-render)
- [Framework Agnostic](/en/development/xcube-core.md#multi-render)
- [Trust Path](/en/development/xcube-core.md#trust-path)
- [D3 Duplicable Modules](/en/development/xcube-core.md#duplicable-modules)
- [XCube Tools](/en/development/xcube-core.md#xcube-tools)

</details>

<details>
<summary style="cursor: pointer;">API Reference</summary>

- Cube Core 
- Subsystems
- Design Patterns
- Delegate manager  
- Preload mechanism : Single file extension 
- Abstract, interface, inheritance, polymorphism
- Virtual Service
- Tools : Code generator

</details>


-----

!> Note ! There are a number of topics that aren’t written yet. That means you can contribute to making this guide better.

## Overview

This page provides an overview of the original XCube design concept build with PHP and MySQL.
It is a brief summary of the initial architecture idea on which the design and eventual development 
of a subsystem is built.
Therefore, it is not an exhaustive API reference including all possible elements, classes, objects 
or detailed models, functions or methods.

Some subpackages and submodules mentioned in the documentation that contain certain public functions 
related to data types are public. However, the business logic, which includes services and code generators, 
is not always publicly available.

## XCube Core

The XCube core concept "3S" stands for — Simple, Secure and Scalable.

At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful and simple.

<div layout="row sm-column my-6">
<div self="size-2of3">
<strong>XCube</strong> is the core layer of the platform giving required minimum functionality to aggregate 
preexistent subsystems,for example the <b>Base</b> subsystem Legacy used to build a customized CMS.

<p>If anyone aims to implement new features on XCube platform, it can be done with a custom subsystem,
aside the initial Base subsystem Legacy or extend it with modules or single file component (ref. preload mechanism).</p>
</div>
<div><img src="https://xoopscube.github.io/documentation/_media/cube-core.png" alt="core"></div>
</div>

## Subsystem Legacy

XOOPSCube Legacy (XCL) is a free and open-source Web Application Platform (WAP) empowering site owners to build, 
manage and deploy scalable web applications. 
The [XCL Bundle Package](./xcl-package.md) includes XCube core, the subsystem Legacy and modules to customize a 
Content Management System (CMS).  
   


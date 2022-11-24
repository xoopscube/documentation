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


## Web frameworks

<p>A web development framework is a set of resources and tools for software developers to build and manage 
web applications, web services and websites. 
There are countless frameworks and technologies that can be used to build a web platform or service.
While the tools and services of existing development frameworks are useful in many use cases, 
the most popular frameworks often come with high costs in terms of resource requirements, development 
and deployment - as well as serious limitations in the integration of components — thus a rather 
poor cost-benefit ratio.</p>

<p>Beyond the rather simple observation of benchmarks comparing technologies, 
it is absolutely necessary to take into account the results. 
Indeed, it is not only the speed of development of your web platform that is important, 
but also the necessary resources and the undeniable financial cost in production.</p>

## Self-Hosted Scalable

**The XCube core concept "3S" stands for — Simple, Secure and Scalable.**

<p>The XCube architecture was developed to overcome these limitations, and to serve as the basis for 
extending an existing web platform. 
The approach stems from real-world experience, resulting in a highly modular and extensible platform 
for reliable resource management and scalability in a very demanding domain. 
Self-hosted platforms are decentralized, allow for superior accessibility,
and full control over your own data and services, rather than depending on expensive third-party services (cloud, saas).</p>

## Extensible Architecture

<div layout="row sm-column my-6">
<div self="size-2of3">
<p>
<strong>XCube</strong> is the core layer of the platform giving required minimum functionality to aggregate 
preexistent subsystems,for example the <b>Base</b> subsystem Legacy used to build a customized CMS. 
At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful and simple framework agnostic.
</p>
<p>Aside the initial Base subsystem Legacy, new features can be easily integrated:</p>
<ul>
<li>Base new subsystem</li>
<li>Module with extended functionality</li> 
<li>Single file component (ref. preload mechanism).</li>
</ul>
</div>
<div><img src="https://xoopscube.github.io/documentation/_media/cube-core.png" alt="core"></div>
</div>

   


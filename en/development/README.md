<dl>
  <dt>The X-Codex Documentation provides information about installation, deployment, API and tools.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences: This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Table of Contents</summary>

- [Overview](#overview) — Web Application Platform and Content Management System.
- [XCube core](/en/development/xcube-concept.md#xcube-core) — Xcube Core concept and base systems.
- [XCube Architecture](/en/development/xcube-concept.md#xcube-development) — Simple, Secure and Scalable.
- [XCube Subsystem](/en/development/xcube-concept.md#xcube-base-system) — Base subsystem.
- [Exchangeable](/en/development/xcube-concept.md#exchangeable) — inheritance, OOP polymorphism and type-safe code.
- [XCube Namespace](/en/development/xcube-concept.md#xcube-namespace) — concept implemented when PHP did not provide any.
- [Delegate Manager](/en/development/xcube-concept.md#delegate-manager) — delegate managers and controllers.
- [Preload](/en/development/xcube-concept.md#preload) — preload system, single file component.
- [Type Safe](/en/development/xcube-concept.md#type-safe)
- [Action Form](/en/development/xcube-concept.md#action-form)
- [Virtual Service](/en/development/xcube-concept.md#virtual-service)
- [Render Engine](/en/development/xcube-concept.md#render-engine)
- [Multi-render](/en/development/xcube-concept.md#multi-render)
- [Framework Agnostic](/en/development/xcube-concept.md#framework-agnostic)
- [Trust Path](/en/development/xcube-concept.md#trust-path)
- [D3 Duplicable Modules](/en/development/xcube-concept.md#duplicable-modules)

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

**The Original XCube Design Concept**  

This page offers a summary of the initial architectural vision for XCube, built using PHP and MySQL. It provides a brief overview of the core design concept upon which the structure and subsequent development of various subsystems are based. Therefore, this document is not intended as a comprehensive API reference detailing every element, class, object, model, function, or method.

## Self-Hosted Scalable

**The XCube core concept "3S" stands for — Simple, Secure and Scalable.**

The XCube architecture was developed to overcome web development frameworks limitations, and to serve as the basis for extending an existing web platform. The approach stems from real-world experience, resulting in a highly modular and extensible platform for reliable resource management and scalability. 
Self-hosted platforms are decentralized, allow for superior accessibility,
and full control over your own data and services, rather than depending on expensive 
third-party services (cloud, saas).

## Extensible Architecture

<div layout="row sm-column my-6">
<div self="size-2of3">
<p>
<strong>XCube</strong> is the core layer of the platform giving required minimum functionality to aggregate 
preexistent bbase-systems, for example the <b>Base</b> system Legacy used to build a customized CMS. 
At its core, XCube minimalism is being intentional to get rid of the superfluous and to be meaningful 
and simple framework agnostic. Aside the initial Base system Legacy, new features can be easily integrated:</p>
<ul>
<li>Base new subsystem</li>
<li>Module with extended functionality</li> 
<li>Single file component (ref. preload mechanism).</li>
</ul>
</div>
<div><img src="https://xoopscube.github.io/documentation/_media/cube-core.png" alt="core"></div>
</div>


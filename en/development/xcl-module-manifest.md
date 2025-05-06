
This page documents the structure of modules in XOOPSCube Legacy and explains how module manifests work. It covers directory organization, essential files, manifest declaration, and configuration options. For information about installing and upgrading modules, see Module Installation and Upgrading.

Module System Overview
Modules are the primary way to extend XOOPSCube Legacy's functionality. Each module is a self-contained application that provides specific functionality. The module system follows a standardized structure to ensure consistency and compatibility.

<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="mermaid-715qn81y11a" width="100%" aria-roledescription="class" class="classDiagram" style="max-width:248.88125610351562px" viewBox="0 0 248.881 1010">
<defs><path id="reuse-0" d="m18 7-9 6-8-6 8-6Z"/></defs><style>@keyframes edge-animation-frame{0%{stroke-dashoffset:0}}@keyframes dash{to{stroke-dashoffset:0}}#mermaid-715qn81y11a{fill:#333}#mermaid-715qn81y11a .edge-thickness-normal{stroke-width:1px}#mermaid-715qn81y11a .edge-pattern-solid{stroke-dasharray:0}#mermaid-715qn81y11a .marker{fill:#999;stroke:#999}#mermaid-715qn81y11a,#mermaid-715qn81y11a svg{font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica;font-size:16px}#mermaid-715qn81y11a p{margin:0}#mermaid-715qn81y11a .edgeLabel,#mermaid-715qn81y11a .nodeLabel{color:#333}#mermaid-715qn81y11a .edgeLabel .label span,#mermaid-715qn81y11a .labelBkg{background:#fff}#mermaid-715qn81y11a .node circle,#mermaid-715qn81y11a .node path{fill:#fff;stroke:#ddd;stroke-width:1px}#mermaid-715qn81y11a .divider{stroke:#ddd;stroke-width:1}#mermaid-715qn81y11a .relation{stroke:#999;stroke-width:1;fill:none}#mermaid-715qn81y11a .composition,#mermaid-715qn81y11a .dependency{fill:#999!important;stroke:#999!important;stroke-width:1}#mermaid-715qn81y11a .aggregation,#mermaid-715qn81y11a .extension,#mermaid-715qn81y11a .lollipop{fill:transparent!important;stroke:#999!important;stroke-width:1}#mermaid-715qn81y11a .lollipop{fill:#fff!important}#mermaid-715qn81y11a :root{--mermaid-font-family:&quot;trebuchet ms&quot;,verdana,arial,sans-serif}</style><defs><marker id="mermaid-715qn81y11a_class-aggregationStart" class="marker aggregation class" markerHeight="240" markerWidth="190" orient="auto" refX="18" refY="7"><use xlink:href="#reuse-0"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-aggregationEnd" class="marker aggregation class" markerHeight="28" markerWidth="20" orient="auto" refX="1" refY="7"><use xlink:href="#reuse-0"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-extensionStart" class="marker extension class" markerHeight="240" markerWidth="190" orient="auto" refX="18" refY="7"><path d="m1 7 17 6V1Z"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-extensionEnd" class="marker extension class" markerHeight="28" markerWidth="20" orient="auto" refX="1" refY="7"><path d="M1 1v12l17-6Z"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-compositionStart" class="marker composition class" markerHeight="240" markerWidth="190" orient="auto" refX="18" refY="7"><use xlink:href="#reuse-0"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-compositionEnd" class="marker composition class" markerHeight="28" markerWidth="20" orient="auto" refX="1" refY="7"><use xlink:href="#reuse-0"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-dependencyStart" class="marker dependency class" markerHeight="240" markerWidth="190" orient="auto" refX="6" refY="7"><path d="m5 7 4 6-8-6 8-6Z"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-dependencyEnd" class="marker dependency class" markerHeight="28" markerWidth="20" orient="auto" refX="13" refY="7"><path d="m18 7-9 6 5-6-5-6Z"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-lollipopStart" class="marker lollipop class" markerHeight="240" markerWidth="190" orient="auto" refX="13" refY="7"><circle cx="7" cy="7" r="6" fill="transparent" stroke="#000"/></marker></defs><defs><marker id="mermaid-715qn81y11a_class-lollipopEnd" class="marker lollipop class" markerHeight="240" markerWidth="190" orient="auto" refX="1" refY="7"><circle cx="7" cy="7" r="6" fill="transparent" stroke="#000"/></marker></defs><g class="root"><g class="edgePaths"><path id="id_XoopsModule_ModuleManifest_1" marker-start="url(#mermaid-715qn81y11a_class-compositionStart)" d="M124.441 586v80" class="edge-thickness-normal edge-pattern-solid relation"/><path id="id_XoopsModuleHandler_XoopsModule_2" marker-end="url(#mermaid-715qn81y11a_class-dependencyEnd)" d="M124.441 206v68" class="edge-thickness-normal edge-pattern-solid relation"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="200" height="48" class="label" transform="translate(24.44 593)"><div class="labelBkg" display="table" style="white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="edgeLabel" display="inline-block"><p>defined in xoops_version.php</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="63.7" height="24" class="label" transform="translate(92.59 231)"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel" display="inline-block"><p>manages</p></span></div></foreignObject></g></g><g class="nodes"><g id="classId-XoopsModule-19" class="node default"><g class="basic label-container"><path fill="#fff" stroke-width="0" d="M26.871 280H222.01v288H26.87"/><path fill="none" stroke="#ddd" stroke-width="1.3" d="M26.871 280H222.01m-195.138 0H222.01m0 0v288m0-288v288m0 0H26.87m195.138 0H26.87m0 0V280m0 288V280"/></g><g class="label-group text"><foreignObject width="104.9" height="24" class="label" font-weight="bolder" transform="translate(71.99 292)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:149px;text-align:center"><span class="nodeLabel markdown-node-label"><p>XoopsModule</p></span></div></foreignObject></g><g class="members-group text"><foreignObject width="64.238" height="24" class="label" transform="translate(38.872 340)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:121px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+mid: int</p></span></div></foreignObject><foreignObject width="98.275" height="24" class="label" transform="translate(38.872 364)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:158px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+name: string</p></span></div></foreignObject><foreignObject width="87.838" height="24" class="label" transform="translate(38.872 388)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:147px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+version: int</p></span></div></foreignObject><foreignObject width="117.125" height="24" class="label" transform="translate(38.872 412)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:177px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+dirname: string</p></span></div></foreignObject></g><g class="methods-group text"><foreignObject width="118.688" height="24" class="label" transform="translate(38.872 460)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:177px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+loadInfoAsVar()</p></span></div></foreignObject><foreignObject width="71.513" height="24" class="label" transform="translate(38.872 484)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:127px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+getInfo()</p></span></div></foreignObject><foreignObject width="83.875" height="24" class="label" transform="translate(38.872 508)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:142px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+mainLink()</p></span></div></foreignObject><foreignObject width="74.275" height="24" class="label" transform="translate(38.872 532)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:133px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+subLink()</p></span></div></foreignObject></g><path fill="none" stroke-width="1.3" d="M26.871 328H222.01m-195.14 0h195.14M26.871 448H222.01m-195.14 0h195.14" class="divider"/></g><g id="classId-ModuleManifest-20" class="node default"><g class="basic label-container"><path fill="#fff" stroke-width="0" d="M8 666h232.88v336H8"/><path fill="none" stroke="#ddd" stroke-width="1.3" d="M8 666h232.88M8 666h232.88m0 0v336m0-336v336m0 0H8m232.88 0H8m0 0V666m0 336V666"/></g><g class="label-group text"><foreignObject width="124.088" height="24" class="label" font-weight="bolder" transform="translate(62.397 678)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:168px;text-align:center"><span class="nodeLabel markdown-node-label"><p>ModuleManifest</p></span></div></foreignObject></g><g class="members-group text"><foreignObject width="117.125" height="24" class="label" transform="translate(20 726)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:177px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+dirname: string</p></span></div></foreignObject><foreignObject width="98.275" height="24" class="label" transform="translate(20 750)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:158px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+name: string</p></span></div></foreignObject><foreignObject width="109.613" height="24" class="label" transform="translate(20 774)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:170px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+version: string</p></span></div></foreignObject><foreignObject width="137.463" height="24" class="label" transform="translate(20 798)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:199px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+description: string</p></span></div></foreignObject><foreignObject width="105.537" height="24" class="label" transform="translate(20 822)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:164px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+author: string</p></span></div></foreignObject><foreignObject width="98.738" height="24" class="label" transform="translate(20 846)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:160px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+blocks: array</p></span></div></foreignObject><foreignObject width="95.95" height="24" class="label" transform="translate(20 870)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:157px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+tables: array</p></span></div></foreignObject><foreignObject width="123.525" height="24" class="label" transform="translate(20 894)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:186px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+templates: array</p></span></div></foreignObject><foreignObject width="146.838" height="24" class="label" transform="translate(20 918)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:207px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+hasAdmin: boolean</p></span></div></foreignObject><foreignObject width="141.262" height="24" class="label" transform="translate(20 942)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:202px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+adminindex: string</p></span></div></foreignObject></g><path fill="none" stroke-width="1.3" d="M8 714h232.88M8 714h232.88M8 978h232.88M8 978h232.88" class="divider"/></g><g id="classId-XoopsModuleHandler-21" class="node default"><g class="basic label-container"><path fill="#fff" stroke-width="0" d="M10.84 8h227.2v198H10.84"/><path fill="none" stroke="#ddd" stroke-width="1.3" d="M10.84 8h227.2M10.84 8h227.2m0 0v198m0-198v198m0 0H10.84m227.2 0H10.84m0 0V8m0 198V8"/></g><g class="label-group text"><foreignObject width="164.925" height="24" class="label" font-weight="bolder" transform="translate(41.978 20)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:206px;text-align:center"><span class="nodeLabel markdown-node-label"><p>XoopsModuleHandler</p></span></div></foreignObject></g><g class="methods-group text"><foreignObject width="120.738" height="24" class="label" transform="translate(22.84 98)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:179px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+getByDirname()</p></span></div></foreignObject><foreignObject width="67.438" height="24" class="label" transform="translate(22.84 122)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:126px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+getList()</p></span></div></foreignObject><foreignObject width="59.675" height="24" class="label" transform="translate(22.84 146)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:117px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+insert()</p></span></div></foreignObject><foreignObject width="64.425" height="24" class="label" transform="translate(22.84 170)"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:121px;text-align:center"><span class="nodeLabel markdown-node-label"><p>+delete()</p></span></div></foreignObject></g><path fill="none" stroke-width="1.3" d="M10.84 56h227.2m-227.2 0h227.2M10.84 80h227.2m-227.2 0h227.2" class="divider"/></g></g></g>
</svg>
</p>
Sources:

- The module system architecture is defined across multiple system files.
- Module instantiation happens through the module handler.

### Directory Structure

XOOPSCube Legacy modules follow a standardized directory structure with two possible locations:


<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="module-directory" width="100%" aria-roledescription="flowchart-v2" class="flowchart" style="max-width:1838.550048828125px" viewBox="0 0 1838.55 382">
<defs><path id="reuse-1" d="M-63.45-27h126.9v54h-126.9z" class="basic label-container"/><path id="reuse-2" d="M-79.731-27H79.732v54H-79.731z" class="basic label-container"/><path id="reuse-3" d="M-95.481-27H95.482v54H-95.481z" class="basic label-container"/><path id="reuse-4" d="M-55.256-27H55.257v54H-55.256z" class="basic label-container"/><path id="reuse-5" d="M-58.638-27H58.637v54H-58.638z" class="basic label-container"/><path id="reuse-6" d="M-65.856-27H65.857v54H-65.856z" class="basic label-container"/><path id="reuse-7" d="M-67.906-27H67.907v54H-67.906z" class="basic label-container"/></defs><style>#module-directory{fill:#333}#module-directory .edge-thickness-normal{stroke-width:1px}#module-directory .edge-pattern-solid{stroke-dasharray:0}#module-directory .marker{fill:#999;stroke:#999}#module-directory .marker.cross{stroke:#999}#module-directory,#module-directory svg{font-family:sans-serif;font-size:16px}#module-directory p{margin:0}#module-directory .label{font-family:sans-serif;color:#333}#module-directory span{fill:#333;color:#333}#module-directory .node circle,#module-directory .node path,#module-directory .node rect{fill:#fff;stroke:#ddd;stroke-width:1px}#module-directory .node .label{text-align:center}#module-directory .flowchart-link{stroke:#999;fill:none}#module-directory .edgeLabel{background-color:#fff;text-align:center}#module-directory .edgeLabel p{background-color:#fff}#module-directory .edgeLabel rect{opacity:.5;background-color:#fff;fill:#fff}#module-directory .labelBkg{background-color:rgba(255,255,255,.5)}#module-directory :root{--mermaid-font-family:&quot;trebuchet ms&quot;,verdana,arial,sans-serif}</style><marker id="module-directory_flowchart-v2-pointEnd" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 0 10 5-10 5z" class="arrowMarkerPath"/></marker><marker id="module-directory_flowchart-v2-pointStart" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="4.5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 5 10 5V0z" class="arrowMarkerPath"/></marker><marker id="module-directory_flowchart-v2-circleEnd" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="11" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="module-directory_flowchart-v2-circleStart" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="module-directory_flowchart-v2-crossEnd" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="12" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><marker id="module-directory_flowchart-v2-crossStart" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><g class="root"><g class="edgePaths"><path id="L_R_M_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M468.113 62v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_M_MD_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M468.113 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD_XVP_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m388.381 254.37-47.483 6.772c-47.483 6.772-142.45 20.315-189.933 30.586C103.481 302 103.481 309 103.481 312.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD_AF_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m388.381 268.297-14.027 4.451c-14.027 4.45-42.081 13.351-56.108 21.302-14.027 7.95-14.027 14.95-14.027 18.45v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD_IF_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M468.113 270v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD_LP_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m547.844 266.76 15.794 4.707c15.793 4.707 47.381 14.12 63.175 22.326C642.606 302 642.606 309 642.606 312.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD_TP_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m547.844 254.573 46.421 6.738c46.42 6.738 139.262 20.213 185.683 30.451C826.369 302 826.369 309 826.369 312.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_R2_M2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M1404.388 62v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_M2_MD2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M1404.388 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD2_XVP2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m1324.656 254.37-47.483 6.772c-47.483 6.772-142.45 20.315-189.933 30.586C1039.756 302 1039.756 309 1039.756 312.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD2_AF2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m1324.656 268.297-14.027 4.451c-14.027 4.45-42.081 13.351-56.108 21.302-14.027 7.95-14.027 14.95-14.027 18.45v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD2_IF2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="M1404.388 270v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD2_LP2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m1484.119 266.76 15.794 4.707c15.793 4.707 47.381 14.12 63.175 22.326 15.793 8.207 15.793 15.207 15.793 18.707v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MD2_TP2_0" marker-end="url(#module-directory_flowchart-v2-pointEnd)" d="m1484.119 254.573 46.421 6.738c46.42 6.738 139.262 20.213 185.683 30.451C1762.644 302 1762.644 309 1762.644 312.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g></g><g class="nodes"><g id="flowchart-R-0" class="node default"><path d="M367.057 8H569.17v54H367.057z" class="basic label-container"/><g class="label" transform="translate(397.056 23)"><rect/><foreignObject width="142.113" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>XOOPS_ROOT_PATH</p></span></div></foreignObject></g></g><g id="flowchart-M-1" class="node default"><use xlink:href="#reuse-1" class="basic label-container" transform="translate(468.113 139)"/><g class="label" transform="translate(434.663 127)"><rect/><foreignObject width="66.9" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>modules/</p></span></div></foreignObject></g></g><g id="flowchart-MD-3" class="node default"><use xlink:href="#reuse-2" class="basic label-container" transform="translate(468.113 243)"/><g class="label" transform="translate(418.381 231)"><rect/><foreignObject width="99.463" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>modulename/</p></span></div></foreignObject></g></g><g id="flowchart-XVP-5" class="node default"><use xlink:href="#reuse-3" class="basic label-container" transform="translate(103.481 347)"/><g class="label" transform="translate(38 335)"><rect/><foreignObject width="130.963" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>xoops_version.php</p></span></div></foreignObject></g></g><g id="flowchart-AF-7" class="node default"><use xlink:href="#reuse-4" class="basic label-container" transform="translate(304.219 347)"/><g class="label" transform="translate(278.963 335)"><rect/><foreignObject width="50.513" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>admin/</p></span></div></foreignObject></g></g><g id="flowchart-IF-9" class="node default"><use xlink:href="#reuse-5" class="basic label-container" transform="translate(468.113 347)"/><g class="label" transform="translate(439.475 335)"><rect/><foreignObject width="57.275" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>include/</p></span></div></foreignObject></g></g><g id="flowchart-LP-11" class="node default"><use xlink:href="#reuse-6" class="basic label-container" transform="translate(642.606 347)"/><g class="label" transform="translate(606.75 335)"><rect/><foreignObject width="71.713" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>language/</p></span></div></foreignObject></g></g><g id="flowchart-TP-13" class="node default"><use xlink:href="#reuse-7" class="basic label-container" transform="translate(826.369 347)"/><g class="label" transform="translate(788.463 335)"><rect/><foreignObject width="75.813" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>templates/</p></span></div></foreignObject></g></g><g id="flowchart-R2-14" class="node default"><path d="M1301.019 8h206.738v54h-206.738z" class="basic label-container"/><g class="label" transform="translate(1331.019 23)"><rect/><foreignObject width="146.738" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>XOOPS_TRUST_PATH</p></span></div></foreignObject></g></g><g id="flowchart-M2-15" class="node default"><use xlink:href="#reuse-1" class="basic label-container" transform="translate(1404.388 139)"/><g class="label" transform="translate(1370.938 127)"><rect/><foreignObject width="66.9" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>modules/</p></span></div></foreignObject></g></g><g id="flowchart-MD2-17" class="node default"><use xlink:href="#reuse-2" class="basic label-container" transform="translate(1404.388 243)"/><g class="label" transform="translate(1354.656 231)"><rect/><foreignObject width="99.463" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>modulename/</p></span></div></foreignObject></g></g><g id="flowchart-XVP2-19" class="node default"><use xlink:href="#reuse-3" class="basic label-container" transform="translate(1039.756 347)"/><g class="label" transform="translate(974.275 335)"><rect/><foreignObject width="130.963" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>xoops_version.php</p></span></div></foreignObject></g></g><g id="flowchart-AF2-21" class="node default"><use xlink:href="#reuse-4" class="basic label-container" transform="translate(1240.494 347)"/><g class="label" transform="translate(1215.238 335)"><rect/><foreignObject width="50.513" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>admin/</p></span></div></foreignObject></g></g><g id="flowchart-IF2-23" class="node default"><use xlink:href="#reuse-5" class="basic label-container" transform="translate(1404.388 347)"/><g class="label" transform="translate(1375.75 335)"><rect/><foreignObject width="57.275" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>include/</p></span></div></foreignObject></g></g><g id="flowchart-LP2-25" class="node default"><use xlink:href="#reuse-6" class="basic label-container" transform="translate(1578.881 347)"/><g class="label" transform="translate(1543.025 335)"><rect/><foreignObject width="71.713" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>language/</p></span></div></foreignObject></g></g><g id="flowchart-TP2-27" class="node default"><use xlink:href="#reuse-7" class="basic label-container" transform="translate(1762.644 347)"/><g class="label" transform="translate(1724.738 335)"><rect/><foreignObject width="75.813" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>templates/</p></span></div></foreignObject></g></g></g></g>
</svg>
</p>

There are two primary locations for modules:

- Regular modules: Located in XOOPS_ROOT_PATH/modules/
- Trust path modules: Located in XOOPS_TRUST_PATH/modules/

Trust path modules use a special security architecture where sensitive code is stored outside the web root.

Sources:

- Module directory structures visible across all examined modules.
- Examples: html/modules/legacy, xoops_trust_path/modules/protector


### Essential Module Files

Every module must include the following key files:

<div class="table-wrapper">
<table><thead><tr><th>File</th><th>Purpose</th></tr></thead><tbody><tr><td><code>xoops_version.php</code></td><td>Module manifest that defines all module capabilities</td></tr><tr><td><code>index.php</code></td><td>Main entry point for the module (if it has user-facing pages)</td></tr><tr><td><code>admin/index.php</code></td><td>Entry point for administrative functions (if has admin)</td></tr><tr><td><code>admin/menu.php</code></td><td>Defines the administrative menu (if has admin)</td></tr><tr><td><code>language/*/modinfo.php</code></td><td>Language files for module interface</td></tr></tbody></table>
</div>


Examined module directories and associated files

- Module configuration files from different modules
- Module Manifests: xoops_version.php

The module manifest file (xoops_version.php) is the most important file in a module. It defines the module's capabilities, features, administration, tables, and all other configurations using the $modversion array.

Here's the structure of a basic manifest:

<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="module-manifest" width="100%" aria-roledescription="flowchart-v2" class="flowchart" style="max-width:3066.162353515625px" viewBox="0 0 3066.162 278">
<style>#module-manifest .marker{fill:#999;stroke:#999}#module-manifest .marker.cross{stroke:#999}#module-manifest .label,#module-manifest svg{font-family:ui-sans-serif}#module-manifest svg{font-size:16px}#module-manifest p{margin:0}#module-manifest .label{color:#333}#module-manifest span{fill:#333;color:#333}#module-manifest .node circle,#module-manifest .node path,#module-manifest .node rect{fill:#fff;stroke:#ddd;stroke-width:1px}#module-manifest .node .label{text-align:center}#module-manifest .flowchart-link{stroke:#999;fill:none}#module-manifest .edgeLabel{background-color:#fff;text-align:center}#module-manifest .edgeLabel p{background-color:#fff}#module-manifest .edgeLabel rect{opacity:.5;background-color:#fff;fill:#fff}#module-manifest .labelBkg{background-color:rgba(255,255,255,.5)}#module-manifest :root{--mermaid-font-family:&quot;trebuchet ms&quot;,verdana,arial,sans-serif}</style><marker id="module-manifest_flowchart-v2-pointEnd" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 0 10 5-10 5z" class="arrowMarkerPath"/></marker><marker id="module-manifest_flowchart-v2-pointStart" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="4.5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 5 10 5V0z" class="arrowMarkerPath"/></marker><marker id="module-manifest_flowchart-v2-circleEnd" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="11" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="module-manifest_flowchart-v2-circleStart" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="module-manifest_flowchart-v2-crossEnd" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="12" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><marker id="module-manifest_flowchart-v2-crossStart" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><g class="root"><g class="edgePaths"><path id="L_MV_B_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2298.631 37.987-261.754 8.169c-261.754 8.169-785.262 24.506-1047.017 36.175C728.106 94 728.106 101 728.106 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_DB_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2298.631 41.006-122.16 7.666c-122.16 7.665-366.479 22.997-488.639 34.162C1565.672 94 1565.672 101 1565.672 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_ADMIN_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2298.631 47.434-50.758 6.595c-50.758 6.594-152.275 19.782-203.033 29.877C1994.081 94 1994.081 101 1994.081 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_TMPL_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M2394.344 62v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_CONF_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2490.056 59.115 18.446 4.648c18.446 4.647 55.338 13.942 73.783 22.09C2600.731 94 2600.731 101 2600.731 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_MENU_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2490.056 47.189 52.103 6.635c52.104 6.635 156.31 19.906 208.413 30.041C2802.675 94 2802.675 101 2802.675 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MV_BLOCK_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2490.056 43.412 82.658 7.265c82.657 7.264 247.971 21.794 330.629 32.558C2986 94 2986 101 2986 104.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m636.775 146.185-94.945 7.469c-94.945 7.469-284.834 22.408-379.779 33.377C67.106 198 67.106 205 67.106 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B2_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m636.775 148.456-68.481 7.091c-68.481 7.091-205.444 21.272-273.925 31.862C225.888 198 225.888 205 225.888 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B3_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m636.775 152.679-42.645 6.387c-42.645 6.386-127.934 19.16-170.579 29.047C380.906 198 380.906 205 380.906 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B4_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m638.497 166-13.829 4.167c-13.828 4.166-41.486 12.5-55.314 20.166C555.525 198 555.525 205 555.525 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B5_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M728.106 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B6_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m809.483 166 12.558 4.167c12.558 4.166 37.674 12.5 50.232 20.166C884.831 198 884.831 205 884.831 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B7_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m819.438 154.125 37.112 6.146c37.113 6.145 111.338 18.437 148.45 28.083 37.113 9.646 37.113 16.646 37.113 20.146v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B8_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m819.438 149.112 63.055 6.981c63.055 6.982 189.165 20.944 252.221 31.426C1197.769 198 1197.769 205 1197.769 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_B_B9_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m819.438 146.706 87.495 7.382c87.496 7.383 262.488 22.147 349.984 33.03C1344.413 198 1344.413 205 1344.413 208.5v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_DB_DB1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m1526.313 166-6.074 4.167c-6.074 4.166-18.222 12.5-24.296 20.166-6.074 7.667-6.074 14.667-6.074 18.167v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_DB_DB2_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m1605.031 166 6.074 4.167c6.074 4.166 18.222 12.5 24.296 20.166 6.074 7.667 6.074 14.667 6.074 18.167v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ADMIN_A1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m1910.238 162.391-17.091 4.769c-17.091 4.768-51.272 14.304-68.363 22.572-17.09 8.268-17.09 15.268-17.09 18.768v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ADMIN_A2_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M1994.081 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ADMIN_A3_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="m2077.925 161.539 18.266 4.91c18.265 4.91 54.797 14.731 73.062 23.141 18.266 8.41 18.266 15.41 18.266 18.91v3.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TMPL_T1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M2394.344 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_CONF_C1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M2600.731 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_MENU_M1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M2802.675 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_BLOCK_BL1_0" marker-end="url(#module-manifest_flowchart-v2-pointEnd)" d="M2986 166v46" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g></g><g class="nodes"><g id="flowchart-MV-0" class="node default"><path d="M2298.631 8h191.425v54h-191.425z" class="basic label-container"/><g class="label" transform="translate(2328.631 23)"><rect/><foreignObject width="131.425" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>$modversion array</p></span></div></foreignObject></g></g><g id="flowchart-B-1" class="node default"><path d="M636.775 112h182.662v54H636.775z" class="basic label-container"/><g class="label" transform="translate(666.775 127)"><rect/><foreignObject width="122.662" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Basic Information</p></span></div></foreignObject></g></g><g id="flowchart-DB-3" class="node default"><path d="M1472.241 112h186.863v54h-186.863z" class="basic label-container"/><g class="label" transform="translate(1502.24 127)"><rect/><foreignObject width="126.863" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Database Settings</p></span></div></foreignObject></g></g><g id="flowchart-ADMIN-5" class="node default"><path d="M1910.237 112h167.688v54h-167.688z" class="basic label-container"/><g class="label" transform="translate(1940.238 127)"><rect/><foreignObject width="107.688" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Admin Settings</p></span></div></foreignObject></g></g><g id="flowchart-TMPL-7" class="node default"><path d="M2328.857 112h130.975v54h-130.975z" class="basic label-container"/><g class="label" transform="translate(2358.856 127)"><rect/><foreignObject width="70.975" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Templates</p></span></div></foreignObject></g></g><g id="flowchart-CONF-9" class="node default"><path d="M2529.831 112h141.8v54h-141.8z" class="basic label-container"/><g class="label" transform="translate(2559.831 127)"><rect/><foreignObject width="81.8" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Preferences</p></span></div></foreignObject></g></g><g id="flowchart-MENU-11" class="node default"><path d="M2721.631 112h162.088v54h-162.088z" class="basic label-container"/><g class="label" transform="translate(2751.631 127)"><rect/><foreignObject width="102.088" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Menu Settings</p></span></div></foreignObject></g></g><g id="flowchart-BLOCK-13" class="node default"><path d="M2933.719 112h104.563v54h-104.563z" class="basic label-container"/><g class="label" transform="translate(2963.719 127)"><rect/><foreignObject width="44.563" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Blocks</p></span></div></foreignObject></g></g><g id="flowchart-B1-15" class="node default"><path d="M8 216h118.213v54H8z" class="basic label-container"/><g class="label" transform="translate(38 231)"><rect/><foreignObject width="58.213" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>dirname</p></span></div></foreignObject></g></g><g id="flowchart-B2-17" class="node default"><path d="M176.213 216h99.35v54h-99.35z" class="basic label-container"/><g class="label" transform="translate(206.212 231)"><rect/><foreignObject width="39.35" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>name</p></span></div></foreignObject></g></g><g id="flowchart-B3-19" class="node default"><path d="M325.562 216H436.25v54H325.562z" class="basic label-container"/><g class="label" transform="translate(355.563 231)"><rect/><foreignObject width="50.688" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>version</p></span></div></foreignObject></g></g><g id="flowchart-B4-21" class="node default"><path d="M486.25 216H624.8v54H486.25z" class="basic label-container"/><g class="label" transform="translate(516.25 231)"><rect/><foreignObject width="78.55" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>description</p></span></div></foreignObject></g></g><g id="flowchart-B5-23" class="node default"><path d="M674.8 216h106.612v54H674.8z" class="basic label-container"/><g class="label" transform="translate(704.8 231)"><rect/><foreignObject width="46.612" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>author</p></span></div></foreignObject></g></g><g id="flowchart-B6-25" class="node default"><path d="M831.412 216H938.25v54H831.412z" class="basic label-container"/><g class="label" transform="translate(861.413 231)"><rect/><foreignObject width="46.838" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>credits</p></span></div></foreignObject></g></g><g id="flowchart-B7-27" class="node default"><path d="M988.25 216h107.725v54H988.25z" class="basic label-container"/><g class="label" transform="translate(1018.25 231)"><rect/><foreignObject width="47.725" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>license</p></span></div></foreignObject></g></g><g id="flowchart-B8-29" class="node default"><path d="M1145.975 216h103.588v54h-103.588z" class="basic label-container"/><g class="label" transform="translate(1175.975 231)"><rect/><foreignObject width="43.588" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>image</p></span></div></foreignObject></g></g><g id="flowchart-B9-31" class="node default"><path d="M1299.563 216h89.7v54h-89.7z" class="basic label-container"/><g class="label" transform="translate(1329.563 231)"><rect/><foreignObject width="29.7" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>icon</p></span></div></foreignObject></g></g><g id="flowchart-DB1-33" class="node default"><path d="M1439.263 216h101.213v54h-101.213z" class="basic label-container"/><g class="label" transform="translate(1469.263 231)"><rect/><foreignObject width="41.213" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>sqlfile</p></span></div></foreignObject></g></g><g id="flowchart-DB2-35" class="node default"><path d="M1590.475 216h102v54h-102z" class="basic label-container"/><g class="label" transform="translate(1620.475 231)"><rect/><foreignObject width="42" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>tables</p></span></div></foreignObject></g></g><g id="flowchart-A1-37" class="node default"><path d="M1742.475 216h130.438v54h-130.438z" class="basic label-container"/><g class="label" transform="translate(1772.475 231)"><rect/><foreignObject width="70.438" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>hasAdmin</p></span></div></foreignObject></g></g><g id="flowchart-A2-39" class="node default"><path d="M1922.912 216h142.338v54h-142.338z" class="basic label-container"/><g class="label" transform="translate(1952.913 231)"><rect/><foreignObject width="82.338" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>adminindex</p></span></div></foreignObject></g></g><g id="flowchart-A3-41" class="node default"><path d="M2115.25 216h144.537v54H2115.25z" class="basic label-container"/><g class="label" transform="translate(2145.25 231)"><rect/><foreignObject width="84.537" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>adminmenu</p></span></div></foreignObject></g></g><g id="flowchart-T1-43" class="node default"><path d="M2309.788 216h169.113v54h-169.113z" class="basic label-container"/><g class="label" transform="translate(2339.788 231)"><rect/><foreignObject width="109.113" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>templates array</p></span></div></foreignObject></g></g><g id="flowchart-C1-45" class="node default"><path d="M2528.9 216h143.662v54H2528.9z" class="basic label-container"/><g class="label" transform="translate(2558.9 231)"><rect/><foreignObject width="83.662" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>config array</p></span></div></foreignObject></g></g><g id="flowchart-M1-47" class="node default"><path d="M2742.963 216h119.425v54h-119.425z" class="basic label-container"/><g class="label" transform="translate(2772.963 231)"><rect/><foreignObject width="59.425" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>hasMain</p></span></div></foreignObject></g></g><g id="flowchart-BL1-49" class="node default"><path d="M2913.837 216h144.325v54h-144.325z" class="basic label-container"/><g class="label" transform="translate(2943.838 231)"><rect/><foreignObject width="84.325" height="24"><div display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>blocks array</p></span></div></foreignObject></g></g></g></g>
</svg>
</p>

Sources:

html/modules/legacyRender/xoops_version.php
7-217
html/modules/user/xoops_version.php
5-313
html/modules/stdCache/xoops_version.php
9-38
html/modules/legacy/xoops_version.php
10-234
xoops_trust_path/modules/protector/xoops_version.php
11-742
Required Manifest Fields
Every module manifest must include the following fields:

<table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">dirname</code></td><td>string</td><td>Module directory name</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">name</code></td><td>string</td><td>Display name (typically from language constants)</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">version</code></td><td>string</td><td>Version number (semantic versioning)</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">detailed_version</code></td><td>string</td><td>More detailed version number</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">description</code></td><td>string</td><td>Module description</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">author</code></td><td>string</td><td>Module author(s)</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">license</code></td><td>string</td><td>License information</td></tr></tbody></table>



Example from legacyRender module:

```php
$modversion['dirname']          = 'legacyRender';
$modversion['name']             = _MI_LEGACYRENDER_NAME;
$modversion['version']          = '2.50';
$modversion['detailed_version'] = '2.50.0';
$modversion['description']      = _MI_LEGACYRENDER_NAME_DESC;
$modversion['author']           = 'The XOOPSCube Project Team';
$modversion['credits']          = 'The XOOPSCube Project Team';
$modversion['license']          = 'GPL see LICENSE';
$modversion['image']            = 'images/module_render.svg';
$modversion['icon']             = 'images/module_icon.svg';
```

Sources:

html/modules/legacyRender/xoops_version.php
7-19
html/modules/user/xoops_version.php
6-17
Database Configuration
If a module needs database tables, it specifies them in the manifest:

```php
$modversion['sqlfile']['mysql'] = "sql/mysql.sql";
$modversion['tables'] = ['table1', 'table2'];
The tables array can use the pattern {prefix}_{dirname} to create module-specific tables.
```

Sources:

html/modules/user/xoops_version.php
20-24
xoops_trust_path/modules/protector/xoops_version.php
43-45
Administration Interface
Modules with administration capabilities define their admin interface:

```php
$modversion['hasAdmin']   = 1;
$modversion['adminindex'] = 'admin/index.php';
$modversion['adminmenu']  = 'admin/menu.php';
```


Sources:

html/modules/legacyRender/xoops_version.php
28-31
html/modules/user/xoops_version.php
26-29
html/modules/stdCache/xoops_version.php
23-26
Templates
Modules can define templates for rendering content:

```php
$modversion['templates'][1]['file'] = 'template_name.html';
$modversion['templates'][1]['description'] = 'Template description';
Each template entry has a numeric index, file path relative to the templates directory, and description.
```

Sources:

html/modules/legacyRender/xoops_version.php
34-36
html/modules/user/xoops_version.php
32-54
html/modules/legacy/xoops_version.php
37-146
Module Configuration (Preferences)
Modules can define configurable preferences:

```php
$modversion['config'][] = [
    'name'        => 'config_name',
    'title'       => '_MI_MODULE_CONFIG_TITLE',
    'description' => '_MI_MODULE_CONFIG_DESC',
    'formtype'    => 'textbox',
    'valuetype'   => 'text',
    'default'     => 'default_value'
];
```

Configuration options support different form types:

- textbox
- textarea
- select
- yesno
- group
- group_multi
- select_multi
- radio
- checkbox
- and many others

Each configuration item specifies:

- name: Internal identifier
- title: Display title (typically language constant)
- description: Explanatory text
- formtype: Type of form element for editing
- valuetype: Data type (int, text, array)
- default: Default value
- options: For select/radio/checkbox types

Sources:

html/modules/legacyRender/xoops_version.php
37-217
html/modules/user/xoops_version.php
57-274
xoops_trust_path/modules/protector/xoops_version.php
78-742
Blocks
Modules can define blocks that can be displayed on any page:

```php
$modversion['blocks'][1]['file'] = 'block_file.php';
$modversion['blocks'][1]['name'] = '_MI_MODULE_BLOCK_NAME';
$modversion['blocks'][1]['description'] = '_MI_MODULE_BLOCK_DESC';
$modversion['blocks'][1]['show_func'] = 'b_module_block_show';
$modversion['blocks'][1]['template'] = 'module_block_template.html';
$modversion['blocks'][1]['edit_func'] = 'b_module_block_edit';
$modversion['blocks'][1]['options'] = 'option1|option2';
```

Block definitions include:

- file: PHP file containing block code
- name: Display name
- description: Block description
- show_func: Function that generates block content
- template: Template for rendering the block
- edit_func: Function for block configuration
- options: Default options
- visible_any: Whether block can be seen by guests
- show_all_module: Whether block shows on all pages

Sources:

html/modules/user/xoops_version.php
282-313
html/modules/stdCache/xoops_version.php
31-38
html/modules/legacy/xoops_version.php
149-233


### Module Lifecycle Scripts

Modules can define custom behavior during installation, update, and uninstallation:

<table><thead><tr><th>File</th><th>Purpose</th></tr></thead><tbody><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">oninstall.php</code></td><td>Executed during module installation</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">onupdate.php</code></td><td>Executed when module is updated</td></tr><tr><td><code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">onuninstall.php</code></td><td>Executed when module is uninstalled</td></tr></tbody></table>

These scripts can perform tasks like:

- Creating or updating database tables
- Installing templates
- Setting default configurations
- Installing blocks
- Migrating data
- Setting up permissions

Sources:

xoops_trust_path/modules/protector/oninstall.php
1-303
xoops_trust_path/modules/protector/onupdate.php
1-276
xoops_trust_path/modules/protector/onuninstall.php
1-242



### Special Module Types

XOOPSCube Legacy includes several core module types:

<ol>
<li>
<p><strong>Legacy Module:</strong> Core functionality and compatibility layer</p>
<ul>
<li>File: <a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/modules/legacy/xoops_version.php" target="_blank" rel="noopener noreferrer"sans-serif><spansans-serif>html/modules/legacy/xoops_version.php</span></a></li>
</ul>
</li>
<li>
<p><strong>User Module:</strong> User authentication and profile management</p>
<ul>
<li>File: <a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/modules/user/xoops_version.php" target="_blank" rel="noopener noreferrer"><spansans-serif>sans-serifhtml/modules/user/xoops_version.php</span></a></li>
</ul>
</li>
<li>
<p><strong>LegacyRender Module:</strong> Template and theme rendering system</p>
<ul>
<li>File: <a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/modules/legacyRender/xoops_version.php" target="_blank" rel="noopener noreferrer"sans-serif><spansans-serif>sans-serifhtml/modules/legacyRender/xoops_version.php</span></a></li>
</ul>
</li>
<li>
<p><strong>stdCache Module:</strong> Standard caching system</p>
<ul>
<li>File: <a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/modules/stdCache/xoops_version.php" target="_blank" rel="noopener noreferrer"sans-serif><spansans-serif>sans-serifhtml/modules/stdCache/xoops_version.php</span></a></li>
</ul>
</li>
<li>
<p><strong>Protection Module:</strong> Security features and filtering</p>
<ul>
<li>File: <a href="https://github.com/xoopscube/legacy/blob/7f33bc98/xoops_trust_path/modules/protector/xoops_version.php" target="_blank" rel="noopener noreferrer"sans-serif><span>sans-serifxoops_trust_path/modules/protector/xoops_version.php</span></a></li>
</ul>
</li>
</ol>


### Custom Module Development

When developing custom modules, developers should:

1. Create the basic directory structure
2. Create a manifest file (xoops_version.php) with all required fields
3. Implement necessary functionality in PHP files
4. Create templates for rendering content
5. Add language files for internationalization
6. Implement lifecycle scripts as needed

Sources:

- Module structure observed across all examined modules
- Common patterns in manifest files

Conclusion
XOOPSCube Legacy's module system provides a flexible and robust way to extend the core functionality. By following the standardized structure and properly defining manifests, developers can create modules that integrate seamlessly with the system.





---
edit
---

## Legacy System

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

 

### How to Scaffold a Module Based on XCube and Legacy System

#### 1. Create Basic Module Structure


<p>First, you need to create the basic directory structure for your module:</p>

```
modules/yourmodule/  
├── admin/  
│   ├── actions/  
│   ├── class/  
│   ├── forms/  
│   ├── index.php  
│   └── menu.php  
├── blocks/  
├── class/  
├── language/  
│   └── english/  
├── templates/  
├── index.php  
└── xoops_version.php  
```

#### 2. Define Module Information in xoops_version.php>

The xoops_version.php file is essential as it defines your module's metadata. This file follows a specific structure as seen in the profile module: xoops_version.php:15-22

```php
<?php  
// Get directory name  
$mydirpath = basename(__DIR__);  
  
// Manifesto  
$modversion['dirname']          = 'yourmodule';  
$modversion['name']             = _MI_YOURMODULE_NAME;  
$modversion['version']          = '1.0';  
$modversion['detailed_version'] = '1.0.0';  
$modversion['description']      = _MI_YOURMODULE_DESC;  
$modversion['author']           = 'Your Name';  
$modversion['credits']          = 'Your Credits';  
$modversion['license']          = 'GPL';  
$modversion['image']            = 'images/module_yourmodule.svg';  
$modversion['icon']             = 'images/module_icon.svg';  
$modversion['help']             = 'help.html';  
$modversion['official']         = 0;  
$modversion['cube_style']       = true;  
  
// SQL  
$modversion['sqlfile']['mysql'] = 'sql/mysql.sql';  
$modversion['tables'][] = '{prefix}_yourmodule_table1';  
$modversion['tables'][] = '{prefix}_yourmodule_table2';  
  
// Admin settings  
$modversion['hasAdmin']   = 1;  
$modversion['adminindex'] = 'admin/index.php';  
$modversion['adminmenu']  = 'admin/menu.php';  
  
// Templates  
$modversion['templates'][] = ['file' => 'yourmodule_index.html'];  
$modversion['templates'][] = ['file' => 'yourmodule_form.html'];  
  
// Public side settings  
$modversion['hasMain'] = 1;
```

### 3. Create SQL Installation Files
Create your SQL files in the sql directory:

modules/yourmodule/sql/mysql.sql  
Example SQL file content:

CREATE TABLE {prefix}_yourmodule_table1 (  
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,  
  title VARCHAR(255) NOT NULL DEFAULT '',  
  content TEXT NOT NULL,  
  created INT(10) UNSIGNED NOT NULL DEFAULT 0,  
  PRIMARY KEY (id)  
) ENGINE=InnoDB;

### 4. Implement Custom Installer (Optional)
For modules with special installation needs, you can create a custom installer. The Legacy system provides a framework for this: ModuleInstallAction.class.php:32-43

To implement a custom installer:

1. Create a class file in admin/class/Installer.class.php:

```php
<?php  
class Yourmodule_Installer extends Legacy_ModuleInstaller  
{  
    public function executeInstall()  
    {  
        // Custom installation logic  
        if (!parent::executeInstall()) {  
            return false;  
        }  
          
        // Additional installation steps  
        return true;  
    }  
}
```

2. Reference it in your xoops_version.php:

```php
$modversion['legacy_installer']['installer']['class'] = 'Installer';
```

### 5. Implement Custom Updater (Optional)

For future updates to your module, you can create a custom updater: ModuleUpdateAction.class.php:36-43

Create a class file in admin/class/Updater.class.php:

```php
<?php  
class Yourmodule_Updater extends Legacy_ModulePhasedUpgrader  
{  
    // Define version milestones  
    public $_mMilestone = [  
        '100' => 'update100',  
        '110' => 'update110'  
    ];  
      
    public function update100()  
    {  
        // Update logic for version 1.00  
        return true;  
    }  
      
    public function update110()  
    {  
        // Update logic for version 1.10  
        return true;  
    }  
}
```

Reference it in your xoops_version.php:

```php
$modversion['legacy_installer']['updater']['class'] = 'Updater';
```

### 6. Create Module Actions

Actions handle specific operations in your module. Create action classes in the admin/actions/ directory:

```php
<?php  
// admin/actions/IndexAction.class.php  
class Yourmodule_IndexAction extends Legacy_Action  
{  
    public function prepare(&$controller, &$xoopsUser)  
    {  
        // Prepare action form if needed  
    }  
      
    public function getDefaultView(&$controller, &$xoopsUser)  
    {  
        // Load data for display  
        return LEGACY_FRAME_VIEW_INDEX;  
    }  
      
    public function execute(&$controller, &$xoopsUser)  
    {  
        // Process form submission  
        return LEGACY_FRAME_VIEW_SUCCESS;  
    }  
}
```

The action flow follows a consistent pattern as seen in the ModuleListAction:

### 7. Create Forms

Forms handle input validation and processing. Create form classes in the admin/forms/ directory:

```php
<?php  
// admin/forms/YourmoduleForm.class.php  
class Yourmodule_YourmoduleForm extends XCube_ActionForm  
{  
    public function getTokenName()  
    {  
        return 'module.yourmodule.YourmoduleForm.TOKEN';  
    }  
      
    public function prepare()  
    {  
        // Define form properties  
        $this->mFormProperties['id'] = new XCube_IntProperty('id');  
        $this->mFormProperties['title'] = new XCube_StringProperty('title');  
        $this->mFormProperties['content'] = new XCube_TextProperty('content');  
          
        // Set validation rules  
        $this->mFieldProperties['title']->setRequired(true);  
        $this->mFieldProperties['content']->setRequired(true);  
    }  
}
```

Form structure follows the pattern seen in ModuleEditForm:

### 8. Create Templates

Create HTML templates in the templates/ directory:

```html
<!-- templates/yourmodule_index.html -->  
<{include file="db:header.html"}>  
  
<h1><{$smarty.const._MD_YOURMODULE_TITLE}></h1>  
  
<div class="yourmodule-container">  
    <!-- Your template content -->  
</div>  
  
<{include file="db:footer.html"}>
```

### 9. Implement Language Files

Create language files in the language/english/ directory:

```php
<?php  
// language/english/modinfo.php  
define('_MI_YOURMODULE_NAME', 'Your Module');  
define('_MI_YOURMODULE_DESC', 'Description of your module');  
  
// language/english/main.php  
define('_MD_YOURMODULE_TITLE', 'Your Module Title');
```

### 10. Create Admin Menu

Create an admin menu in admin/menu.php:

```php
<?php  
$adminmenu[] = [  
    'title' => _MI_YOURMODULE_ADMIN_INDEX,  
    'link' => 'admin/index.php'  
];  
$adminmenu[] = [  
    'title' => _MI_YOURMODULE_ADMIN_MANAGE,  
    'link' => 'admin/manage.php'  
];
```

### 11. Implement Module Class (Optional)

For more complex modules, you might want to create a module class that extends Legacy_AbstractModule:

```php
<?php  
// class/Yourmodule.class.php  
class Yourmodule extends Legacy_AbstractModule  
{  
    public function __construct(&$xoopsModule)  
    {  
        parent::__construct($xoopsModule);  
        // Additional initialization  
    }  
      
    // Custom methods for your module  
}
```

### 12. Testing Installation

After creating your module structure:

1. Zip the directory
2. Install it through the XOOPSCube Legacy admin interface (System Admin > Modules > Install Module)

### Note

- The XCube system follows an event-driven architecture with a task-based approach
- Module development leverages this architecture through delegates and action classes
- The Legacy system provides utilities for module installation, updates, and uninstallation
- Custom installers/updaters can be implemented for complex modules
- The current version of XOOPSCube Legacy appears to be 2.5.0 based on the code snippets

This scaffolding approach follows the patterns established in existing modules like profile, legacy, and message, ensuring compatibility with the XOOPSCube Legacy system.


> **TIP** Remember that module development in XOOPSCube Legacy requires understanding both the XCube core architecture and the Legacy system that builds upon it.



### Understanding Module Actions, Controllers, and Forms in XOOPSCube Legacy

Based on the code snippets provided, I'll dive into how module actions, controllers, and forms work in the XOOPSCube Legacy system.

#### Module Actions


In XOOPSCube Legacy, actions are classes that handle specific operations within a module. They follow a consistent pattern:

#### Action Structure

Actions typically extend 
`Legacy_Action` or specialized abstract classes like `Legacy_AbstractEditAction`. Each action class implements several key methods:

prepare(): Sets up the action form and other necessary components 
<span role="link" tabindex="0">ModuleListAction.class.php:25-29</span></p>

```php
public $mActionForm = null;
public function prepare(&$controller, &$xoopsUser)
{
    $this->mActionForm =new Legacy_ModuleListForm();
    $this->mActionForm->prepare();
}
```

getDefaultView(): Prepares data for the default view and returns a view constant 
<span role="link" tabindex="0">ModuleListAction.class.php:32-41</span>

```php
public function getDefaultView(&$controller, &$xoopsUser)
{
    $this->mFilter =new Legacy_ModuleListFilterForm();
    $this->mFilter->fetch();

    $moduleHandler =& xoops_gethandler('module');
    $this->mModuleObjects =& $moduleHandler->getObjects($this->mFilter->getCriteria());

    return LEGACY_FRAME_VIEW_INDEX;
}
```

execute(): Handles form submission and performs the actual action 
<span role="link" tabindex="0">ModuleListAction.class.php:43-64</span>

```php
public function execute(&$controller, &$xoopsUser)
{
    $form_cancel = $controller->mRoot->mContext->mRequest->getRequest('_form_control_cancel');
    if (null !== $form_cancel) {
        return LEGACY_FRAME_VIEW_CANCEL;
    }

    $this->mActionForm->fetch();
    $this->mActionForm->validate();

    if ($this->mActionForm->hasError()) {
        return $this->_processConfirm($controller, $xoopsUser);
    } else {
        $result = $this->_processSave($controller, $xoopsUser);
        if (LEGACY_FRAME_VIEW_SUCCESS === $result) {
            XCube_DelegateUtils::call('Legacy.Admin.Event.ModuleListSave.Success', new XCube_Ref($this->mActionForm));
        } else {
            XCube_DelegateUtils::call('Legacy.Admin.Event.ModuleListSave.Fail', new XCube_Ref($this->mActionForm));
        }
        return $result;
    }
}
```

#### Action Flow

The typical flow of an action is:

<ol>
<li>Prepare the action form</li>
<li>Load data for display (getDefaultView)</li>
<li>Process form submission (execute)</li>
<li>Return a view constant (SUCCESS, ERROR, INPUT, CANCEL)</li>
</ol>

For example, in the module installation process: 

ModuleInstallAction.class.php:164-189

```php
public function execute(&$controller, &$xoopsUser)
{
    if (isset($_REQUEST['_form_control_cancel'])) {
        return LEGACY_FRAME_VIEW_CANCEL;
    }

    $this->mActionForm->fetch();
    $this->mActionForm->validate();

    if ($this->mActionForm->hasError()) {
        return $this->getDefaultView($controller, $xoopsUser);
    }

    $this->mInstaller->setForceMode($this->mActionForm->get('force'));
    if (!$this->mInstaller->executeInstall()) {
        $this->mInstaller->mLog->addReport('Force Uninstallation is started.');
        $dirname = $this->mXoopsModule->get('dirname');
        $uninstaller =& Legacy_ModuleInstallUtils::createUninstaller($dirname);

        $uninstaller->setForceMode(true);
        $uninstaller->setCurrentXoopsModule($this->mXoopsModule);

        $uninstaller->executeUninstall();
    }

    return LEGACY_FRAME_VIEW_SUCCESS;
}
```

#### Controllers

The controller system in XOOPSCube Legacy is based on a front controller pattern:

#### Legacy_Controller

`Legacy_Controller` extends  `XCube_Controller` and serves as the main controller for the Legacy system: 
Legacy_Controller.class.php:39-44

```php
require_once XOOPS_ROOT_PATH . '/modules/legacy/class/Legacy_Debugger.class.php';

/**
 * This class is a virtual controller that ensures compatibility with XOOPS 2.0.x.
 *
 * [NOTICE]
 * XOOPS 2.0.x can switch to public mode and control panel mode. This controller
 * emulates its process by using STATE. But, we may lose flexible setup with this
 * implementation. Now, we are investigating the influence.
```
The controller:

<ol>
<li>Sets up the environment</li>
<li>Manages module contexts</li>
<li>Handles requests through strategies</li>
</ol>

#### Module Context Setup

The controller sets up module contexts to handle module-specific operations: 
Legacy_Controller.class.php:1505-1524

#### Forms

Forms in XOOPSCube Legacy are implemented through the `XCube_ActionForm` system:


#### Form Structure

Forms typically extend `XCube_ActionForm` and define:

<ol>
<li>Form properties (fields)</li>
<li>Field validation rules</li>
<li>Methods for fetching and processing data</li>
</ol>

Example from `ModuleEditForm`: 

ModuleEditForm.class.php:18-30

```php
require_once XOOPS_ROOT_PATH . '/core/XCube_ActionForm.class.php';
require_once XOOPS_MODULE_PATH . '/legacy/class/Legacy_Validator.class.php';

class Legacy_ModuleEditForm extends XCube_ActionForm
{
    public function getTokenName()
    {
        return 'module.legacy.ModuleEditForm.TOKEN' . $this->get('mid');
    }

    public function prepare()
    {
        //
        // Set form properties
        //
        $this->mFormProperties['mid'] =new XCube_IntProperty('mid');
        $this->mFormProperties['name'] =new XCube_StringProperty('name');
        $this->mFormProperties['weight'] =new XCube_IntProperty('weight');
        $this->mFormProperties['read_groupid'] =new XCube_IntArrayProperty('read_groupid');
```

#### Form Processing

Forms handle:

<ol>
<li><strong>prepare()</strong>: Sets up form properties and validation rules</li>
<li><strong>fetch()</strong>: Retrieves values from the request</li>
<li><strong>validate()</strong>: Validates the form data</li>
</ol>


The fetch process is handled by the base `XCube_ActionForm` class:

#### Putting It All Together

Let's see how these components work together in a typical module action:

<ol>
<li>The controller receives a request and routes it to the appropriate action</li>
<li>The action's <code>prepare()</code> method initializes the action form</li>
<li>The action's <code>getDefaultView()</code> method prepares data for display</li>
<li>When the form is submitted, the action's <code>execute()</code> method:
<ul>
<li>Fetches form data using <code>$this-&gt;mActionForm-&gt;fetch()</code></li>
<li>Validates the data using <code>$this-&gt;mActionForm-&gt;validate()</code></li>
<li>Processes the action if validation passes</li>
<li>Returns a view constant</li>
</ul>
</li>
</ol>

<p>For example, in <code>ModuleUpdateAction</code>: <span>ModuleUpdateAction.class.php:171-180</span></p>

#### Event-Driven Architecture

The system uses delegates for event handling, allowing modules to hook into various points in the execution flow: <span>ModuleListAction.class.php:57-62</span></p>


```php
public function execute(&$controller, &$xoopsUser)
{
    $form_cancel = $controller->mRoot->mContext->mRequest->getRequest('_form_control_cancel');
    if (null !== $form_cancel) {
        return LEGACY_FRAME_VIEW_CANCEL;
    }

    $this->mActionForm->fetch();
    $this->mActionForm->validate();

    if ($this->mActionForm->hasError()) {
        return $this->_processConfirm($controller, $xoopsUser);
    } else {
        $result = $this->_processSave($controller, $xoopsUser);
        if (LEGACY_FRAME_VIEW_SUCCESS === $result) {
            XCube_DelegateUtils::call('Legacy.Admin.Event.ModuleListSave.Success', new XCube_Ref($this->mActionForm));
        } else {
            XCube_DelegateUtils::call('Legacy.Admin.Event.ModuleListSave.Fail', new XCube_Ref($this->mActionForm));
        }
        return $result;
    }
}
```

#### Notes

<ul>
<li>The XOOPSCube Legacy system follows an MVC-like pattern with actions serving as controllers</li>
<li>Forms handle input validation and processing</li>
<li>The controller manages the overall flow and delegates to actions</li>
<li>The event-driven architecture allows for extensibility through delegates</li>
<li>Module actions typically follow a consistent pattern of prepare, getDefaultView, and execute methods</li>
</ul>

This architecture makes it possible to create modular, extensible applications with clear separation of concerns.

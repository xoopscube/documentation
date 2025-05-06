
The rendering system allows for significant changes to the appearance and layout without altering the core logic of the application. This separation is ensured by the Render System, and the Smarty template engine processes a Template Set, which is a collection of files containing HTML, CSS, JavaScript, and specific template tags.

## Templates Management

Template Sets are a core feature of the XCL rendering system, implemented in the **legacyRender** module. The Template Set management interface allows administrators to manage template sets used to control the appearance of modules and themes throughout the system. 

- **Template** Sets can be managed through the **legacyRender** module's admin interface or AltSys **Components** :      
- You can create custom Template Sets by cloning the default one and then modifying the templates within the new set.

The Template Set management interface can be accessed through:

`Control Panel »» Render »» Template Management` 

or using **Components** 

`Control Panel »» Components (Altsys) »» Templates` 

The implementation of Template Sets in the Altsys module (i.e., Components) provides additional functionality for managing template sets. This module retrieves template sets from the database and prepares them for display in the admin interface, but also provides simple creation of custom templates and block duplication.

?> You can also find quick links to the Template Manager in the Dashboard, under the Module Menu, or on the Frontend Block Title.

## Default Template Set

The XOOPSCube Legacy distribution package comes with a Default Template Set.  
When modules are installed, their templates automatically become part of   
this Default Template Set.

1. The distribution package comes with a **Default Template Set**
2. When modules are installed, their templates become part of this Default Template set
3. The list of **Template Sets** is displayed in **Template Management**

!> The default Template Set cannot be cannot be deleted or modified !


## Modules Templates

The template system in XCL provides a flexible architecture that allows for multiple levels of customization while maintaining a clear separation between core templates and customized versions.

### System Modules Templates

System modules store their templates in the `html/modules/` directory.   
Each module has its own directory structure for templates:

**Main Templates**: Located in `/html/modules/modulename/templates/`   
These templates are used for the main content of the module

**Block Templates**: Located in `/html/modules/modulename/templates/blocks/`   
These templates are used for rendering blocks

During module installation, block templates are processed and stored in the database:

**Admin Templates**: Located in `/html/modules/modulename/admin/templates/`   
These templates are used for the admin interface.  
The **admin render system** looks for templates in this location.


### Templates Location

By separating the diagrams for public modules templates and trust path modules templates, makes the structure more readable while still showing how each part integrates with the Template Set system. The diagrams illustrate the hierarchical organization of templates in both locations and how they connect to the Template Set management system.

### System Modules Templates Diagram

<div class="panzoom-schema">
<svg xmlns="http://www.w3.org/2000/svg" id="xcl_render_template_public" aria-roledescription="flowchart-v2" class="xcl-diagram flowchart" style="max-width:2142.52490234375px" viewBox="0 0 2142.525 679"><g class="root"><g class="nodes"><g class="root"><g class="clusters"><g id="subGraph1" class="cluster" data-look="classic"><path d="M8 8h2126.525v663H8z"/><foreignObject width="183.55" height="24" class="cluster-label" transform="translate(979.488 8)"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Public Modules Templates</p></span></div></foreignObject></g><g id="subGraph0" class="cluster" data-look="classic"><path d="M28 174.5h794.7v459H28z"/><foreignObject width="173.188" height="24" class="cluster-label" transform="translate(338.756 174.5)"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Template Set Integration</p></span></div></foreignObject></g></g><g class="edgePaths"><path id="L_PM_PMT_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="M1475.572 99.5V208" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMT_PMTMain_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m1380.666 252.772-58.264 8.455c-58.264 8.454-174.793 25.364-233.057 39.402-58.264 14.038-58.264 25.204-58.264 30.788V337" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMTMain_PMTMainFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m857.7 403.975-63.308 8.754c-63.309 8.754-189.925 26.263-278.405 42.837-88.48 16.575-138.824 32.216-163.995 40.037l-25.172 7.821" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMT_PMTBlocks_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m1466.272 266-2.152 6.25c-2.153 6.25-6.458 18.75-8.611 30.583-2.153 11.834-2.153 23-2.153 28.584V337" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMTBlocks_PMTBlockFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m1254.463 398.316-105.302 9.698c-105.302 9.697-315.905 29.091-439.159 48.716-123.255 19.625-159.161 39.48-177.114 49.407l-17.953 9.927" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMT_PMTAdmin_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m1570.478 253.393 55.068 8.351c55.069 8.351 165.205 25.054 220.273 38.988 55.069 13.935 55.069 25.101 55.069 30.685V337" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_PMTAdmin_PMTAdminFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m1702.25 393.19-158.904 10.552c-158.903 10.551-476.711 31.655-641.507 51.887-164.796 20.232-176.582 39.593-182.475 49.274l-5.892 9.68" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TS_Default_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m342.1 260.066-27.086 7.239c-27.087 7.239-81.26 21.717-108.346 36.539-27.087 14.823-27.087 29.989-27.087 37.573V349" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TS_Custom_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m476.427 266 12.847 6.25c12.848 6.25 38.543 18.75 51.391 32.583 12.847 13.834 12.847 29 12.847 36.584V349" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Default_PMTMainFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m158.729 407-6.371 8.25c-6.372 8.25-19.115 24.75-20.789 38.734-1.674 13.985 7.721 25.453 12.419 31.187l4.697 5.735" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Default_PMTBlockFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m224.836 407 13.828 8.25c13.828 8.25 41.483 24.75 72.662 42.919 31.178 18.169 65.879 38.007 83.229 47.927l17.351 9.919" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Default_PMTAdminFiles_0" marker-end="url(#xcl_render_template_public_flowchart-v2-pointEnd)" d="m269.368 407 27.435 8.25c27.435 8.25 82.305 24.75 139.335 43.036s116.22 38.358 145.815 48.394l29.595 10.035" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g></g><g class="nodes"><g id="flowchart-PMTMainFiles-6" class="node default"><path d="M-130-51h260V51h-260z" class="basic label-container" transform="translate(193 545)"/><g class="label" transform="translate(93 509)"><rect/><foreignObject width="200" height="72"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>template.html files<br/>Example: legacy_app_start_page.html</p></span></div></foreignObject></g></g><g id="flowchart-PM-0" class="node default"><path d="M-82.638-27H82.637v54H-82.638z" class="basic label-container" transform="translate(1475.572 72.5)"/><g class="label" transform="translate(1422.934 60.5)"><rect/><foreignObject width="105.275" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>html/modules/</p></span></div></foreignObject></g></g><g id="flowchart-PMT-2" class="node default"><path d="M-94.906-27H94.907v54H-94.906z" class="basic label-container" transform="translate(1475.572 239)"/><g class="label" transform="translate(1410.666 227)"><rect/><foreignObject width="129.813" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module Templates</p></span></div></foreignObject></g></g><g id="flowchart-PMTMain-4" class="node default"><path d="M-173.381-39h346.763v78h-346.763z" class="basic label-container" transform="translate(1031.081 380)"/><g class="label" transform="translate(887.7 356)"><rect/><foreignObject width="286.763" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Main Templates<br/>/html/modules/modulename/templates/</p></span></div></foreignObject></g></g><g id="flowchart-PMTBlocks-8" class="node default"><path d="M-198.894-39h397.788v78h-397.788z" class="basic label-container" transform="translate(1453.356 380)"/><g class="label" transform="translate(1284.463 356)"><rect/><foreignObject width="337.788" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Block Templates<br/>/html/modules/modulename/templates/blocks/</p></span></div></foreignObject></g></g><g id="flowchart-PMTBlockFiles-10" class="node default"><path d="M-89.606-27H89.607v54H-89.606z" class="basic label-container" transform="translate(462.606 545)"/><g class="label" transform="translate(403 533)"><rect/><foreignObject width="119.213" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>block_*.html files</p></span></div></foreignObject></g></g><g id="flowchart-PMTAdmin-12" class="node default"><path d="M-198.637-39h397.275v78h-397.275z" class="basic label-container" transform="translate(1900.888 380)"/><g class="label" transform="translate(1732.25 356)"><rect/><foreignObject width="337.275" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Admin Templates<br/>/html/modules/modulename/admin/templates/</p></span></div></foreignObject></g></g><g id="flowchart-PMTAdminFiles-14" class="node default"><path d="M-92.744-27H92.744v54H-92.744z" class="basic label-container" transform="translate(694.956 545)"/><g class="label" transform="translate(632.212 533)"><rect/><foreignObject width="125.488" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>admin_*.html files</p></span></div></foreignObject></g></g><g id="flowchart-TS-15" class="node default"><path d="M-78.825-27h157.65v54h-157.65z" class="basic label-container" transform="translate(420.925 239)"/><g class="label" transform="translate(372.1 227)"><rect/><foreignObject width="97.65" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Template Sets</p></span></div></foreignObject></g></g><g id="flowchart-Default-17" class="node default"><path d="M-103.162-27h206.325v54h-206.325z" class="basic label-container" transform="translate(179.581 380)"/><g class="label" transform="translate(106.419 368)"><rect/><foreignObject width="146.325" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Default Template Set</p></span></div></foreignObject></g></g><g id="flowchart-Custom-19" class="node default"><path d="M-108.181-27h216.363v54h-216.363z" class="basic label-container" transform="translate(553.512 380)"/><g class="label" transform="translate(475.331 368)"><rect/><foreignObject width="156.363" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Custom Template Sets</p></span></div></foreignObject></g></g></g></g></g></g></svg>
</div>

### Trust Path Modules Templates

Trust path modules in XOOPSCube Legacy store their templates in the `xoops_trust_path/modules/` directory. The template structure of trust modules is similar to public system modules; however, public and admin templates are kept in the same folder within your trust path.

**Main Templates**: Located in `/xoops_trust_path/modules/trustdirname/templates/`

Example from D3Forum module:

**Block Templates**: Located in `/xoops_trust_path/modules/trustdirname/templates/blocks/`
The template loading process for trust path modules is handled by the `resource.db.php` plugin, which checks multiple locations: `resource.db.php:241-262`

>! Placing templates in your public directory overrides the default templates located in your trust path folder.

### Trust Path Modules Templates Diagram

<div class="panzoom-schema">
<svg xmlns="http://www.w3.org/2000/svg" id="mermaid-mdv103bickf" aria-roledescription="flowchart-v2" class="xcl-diagram flowchart" style="max-width:2869.262451171875px" viewBox="0 0 2869.262 679"><g class="root"><g class="nodes"><g class="root"><g class="clusters"><g id="subGraph1" class="cluster" data-look="classic"><path d="M8 8h2853.262v663H8z"/><foreignObject width="200" height="48" class="cluster-label" transform="translate(1334.631 8)"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Trust Path Modules Templates</p></span></div></foreignObject></g><g id="subGraph0" class="cluster" data-look="classic"><path d="M1042.45 303.5h1798.812v330H1042.45z"/><foreignObject width="183" height="24" class="cluster-label" transform="translate(1850.356 303.5)"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Template Loading Process</p></span></div></foreignObject></g></g><g class="edgePaths"><path id="L_TPM_TPMT_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="M512.469 99.5v71" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TPMT_TPMTMain_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m417.562 225.637-26.451 6.727c-26.451 6.727-79.353 20.182-105.804 33.159-26.451 12.977-26.451 25.477-26.451 37.31V337" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TPMTMain_TPMTMainFiles_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m474.712 398.848 110.04 9.609c110.04 9.609 330.119 28.826 444.856 44.169 114.737 15.343 124.132 26.811 128.83 32.545l4.697 5.735" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TPMT_TPMTBlocks_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m607.375 225.637 26.451 6.727c26.451 6.727 79.353 20.182 105.804 33.159 26.451 12.977 26.451 25.477 26.451 37.31V337" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TPMTBlocks_TPMTBlockFiles_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m1007.45 411.501 57.467 7.499c57.467 7.5 172.402 22.5 243.78 39.864 71.378 17.365 99.199 37.093 113.11 46.958l13.911 9.864" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TLP_TLP1_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m2091.387 399.761-57.462 9.456c-57.463 9.457-172.388 28.37-229.85 47.41-57.463 19.04-57.463 38.206-57.463 47.79V514" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TLP_TLP2_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m2156.774 407-16.71 8.25c-16.71 8.25-50.131 24.75-66.841 42.583-16.711 17.834-16.711 37-16.711 46.584V514" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TLP_TLP3_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m2266.151 407 16.71 8.25c16.71 8.25 50.131 24.75 66.841 42.583 16.71 17.834 16.71 37 16.71 46.584V514" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_TLP_TLP4_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m2331.537 399.761 57.463 9.456c57.462 9.457 172.387 28.37 229.85 47.41 57.462 19.04 57.462 38.206 57.462 47.79V514" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Default_TPMTMainFiles_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m1419.479 407-14.538 8.25c-14.538 8.25-43.613 24.75-66.42 38.864-22.808 14.115-39.348 25.843-47.618 31.708l-8.27 5.864" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Default_TPMTBlockFiles_0" marker-end="url(#mermaid-mdv103bickf_flowchart-v2-pointEnd)" d="m1514.625 407 14.535 8.25c14.535 8.25 43.605 24.75 44.232 42.864.627 18.115-27.189 37.843-41.097 47.708l-13.908 9.864" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g><g class="edgeLabel"><foreignObject width="0" height="0" class="label"><div class="labelBkg" style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"/></div></foreignObject></g></g><g class="nodes"><g id="flowchart-TPMTMainFiles-6" class="node default"><path d="M-130-51h260V51h-260z" class="basic label-container" transform="translate(1207.45 545)"/><g class="label" transform="translate(1107.45 509)"><rect/><foreignObject width="200" height="72"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>template.html files<br/>Example: main_listtopics.html</p></span></div></foreignObject></g></g><g id="flowchart-TPM-0" class="node default"><path d="M-126.494-27h252.988v54h-252.988z" class="basic label-container" transform="translate(512.469 72.5)"/><g class="label" transform="translate(415.975 60.5)"><rect/><foreignObject width="192.988" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>xoops_trust_path/modules/</p></span></div></foreignObject></g></g><g id="flowchart-TPMT-2" class="node default"><path d="M-94.906-27H94.907v54H-94.906z" class="basic label-container" transform="translate(512.469 201.5)"/><g class="label" transform="translate(447.562 189.5)"><rect/><foreignObject width="129.813" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module Templates</p></span></div></foreignObject></g></g><g id="flowchart-TPMTMain-4" class="node default"><path d="M-215.856-39h431.712v78h-431.712z" class="basic label-container" transform="translate(258.856 380)"/><g class="label" transform="translate(73 356)"><rect/><foreignObject width="371.712" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Main Templates<br/>/xoops_trust_path/modules/trustdirname/templates/</p></span></div></foreignObject></g></g><g id="flowchart-TPMTBlocks-8" class="node default"><path d="M-241.369-39h482.738v78h-482.738z" class="basic label-container" transform="translate(766.081 380)"/><g class="label" transform="translate(554.712 356)"><rect/><foreignObject width="422.738" height="48"><div style="display:table;white-space:break-spaces;line-height:1.5;max-width:200px;text-align:center;width:200px"><span class="nodeLabel"><p>Block Templates<br/>/xoops_trust_path/modules/trustdirname/templates/blocks/</p></span></div></foreignObject></g></g><g id="flowchart-TPMTBlockFiles-10" class="node default"><path d="M-89.606-27H89.607v54H-89.606z" class="basic label-container" transform="translate(1477.056 545)"/><g class="label" transform="translate(1417.45 533)"><rect/><foreignObject width="119.213" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>block_*.html files</p></span></div></foreignObject></g></g><g id="flowchart-TLP-11" class="node default"><path d="M-120.075-27h240.15v54h-240.15z" class="basic label-container" transform="translate(2211.462 380)"/><g class="label" transform="translate(2121.387 368)"><rect/><foreignObject width="180.15" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Template Loading Priority</p></span></div></foreignObject></g></g><g id="flowchart-TLP1-13" class="node default"><path d="M-129.95-27h259.9v54h-259.9z" class="basic label-container" transform="translate(1746.612 545)"/><g class="label" transform="translate(1646.662 533)"><rect/><foreignObject width="199.9" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel">Unsupported markdown: list</span></div></foreignObject></g></g><g id="flowchart-TLP2-15" class="node default"><path d="M-129.95-27h259.9v54h-259.9z" class="basic label-container" transform="translate(2056.512 545)"/><g class="label" transform="translate(1956.562 533)"><rect/><foreignObject width="199.9" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel">Unsupported markdown: list</span></div></foreignObject></g></g><g id="flowchart-TLP3-17" class="node default"><path d="M-129.95-27h259.9v54h-259.9z" class="basic label-container" transform="translate(2366.412 545)"/><g class="label" transform="translate(2266.462 533)"><rect/><foreignObject width="199.9" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel">Unsupported markdown: list</span></div></foreignObject></g></g><g id="flowchart-TLP4-19" class="node default"><path d="M-129.95-27h259.9v54h-259.9z" class="basic label-container" transform="translate(2676.312 545)"/><g class="label" transform="translate(2576.362 533)"><rect/><foreignObject width="199.9" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel">Unsupported markdown: list</span></div></foreignObject></g></g><g id="flowchart-Default-20" class="node default"><path d="M-103.162-27h206.325v54h-206.325z" class="basic label-container" transform="translate(1467.056 380)"/><g class="label" transform="translate(1393.894 368)"><rect/><foreignObject width="146.325" height="24"><div style="display:table-cell;white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Default Template Set</p></span></div></foreignObject></g></g></g></g></g></g></svg>
</div>


## Template Loading Priority

When a template is requested, the system looks for it in the following order:

**Custom Theme Override**: First checks if the template exists in the current theme's template directory

**Database Template**: Looks for the template in the active Template Set in the database

**Public Module Template**: Checks the module's template directory in the public modules folder

**Trust Path Module Template**: Finally checks the trust path module's template directory

### Template Sets Integration

All templates from modules (both public and trust path) are imported into the Default Template Set when modules are installed: `ModuleInstallUtils.class.php:309-334`

Custom Template Sets can be created by cloning the `Default Template Set`, allowing for customization without modifying the original templates.


---------------

### Template Set List Interface

The Template Set list interface displays all available template sets in the system. The interface includes the following columns:

- Template Set ID
- Template Set Name and Description
- Credits
- Creation Date


### Creating a Custom Template Set

To create a custom template set:

1. Clone the Default Template Set to create a new Template Set
2. Edit the templates in your new Template Set
3. Once you have customized your new Template Set, you can activate it with the "Select" button help.html:151-156

The cloning process allows you to create a new template set from the Base (default template files collection) to adapt your user interface design to different contexts, cultures, and respond to the needs of different users. help.html:212-214

### Template Set Creation Options

When creating a new template set, you have two main options:

1. Base: Default - This option duplicates all templates from the default set
2. Base: (blank) - This option allows you to customize only specific templates help.html:258-260

To create a new template set:

1. Select the Base (Default or blank)
2. Name your new Template Set (e.g., "custom")
3. Click "Create" help.html:261-265

###  Customizing Templates in a Template Set

After creating a custom template set, you can customize individual templates:

1. Click on the "Edit" button for the template you want to modify
2. Make your desired changes
3. Save the template 

help.html:272-274

The template editor highlights the differences between the source template and your custom template using colors, making it easier to see your modifications. help.html:277

### Activating a Custom Template Set

To activate your custom template set:

1. Go to Control Panel » Render » Template Management » List of Template Sets
2. Click the "Select" button next to your custom template set help.html:281-282

### Deleting a Custom Template Set

Custom Template Sets can be deleted through the Render module:

1. Go to Control Panel » Render » Template Management » List of Template Sets
2. Use the delete option for the template set you want to remove help.html:288-289

### Template File Management

The Template Set management interface also allows you to manage individual template files. You can download and edit each file directly through the interface. help.html:160

Additionally, you can upload Template Set archives in tar format through the admin interface. help.html:162

### Technical Implementation

The Template Set system is implemented using the following core classes:

1. XoopsTplset - Represents a template set object
2. XoopsTplsetHandler - Handles database operations for template sets

The system retrieves template sets from the database using the XoopsTplsetHandler:

### Render Engine and Templates

The Render theme engine uses Themes and Templates built with HTML, CSS, JavaScript, and Smarty tags. Smarty is used with custom delimiters that are similar to HTML markup language to render dynamic content, making it easier to create and design themes, templates, and custom components. help.html:132-134

The renderer implementation of Smarty uses custom delimiters <{ and }> instead of the standard Smarty curly brace tag delimiters {$var}. help.html:136-137

### Benefits of Using Template Sets

1. Separation of Presentation and Logic: Template Sets help maintain a clean separation between presentation (HTML/CSS) and application logic (PHP).

2. Customization: Create multiple template sets for different purposes or themes.
3. Consistency: Ensure a consistent look and feel across your site.
4. Modularity: Templates can be organized and managed in logical sets.
5. Performance: The system caches compiled templates for improved performance.

---

### Key Takeaways

The Template Set management interface is a powerful feature of the XOOPSCube Legacy system that allows for extensive customization of the appearance of your site. By creating and managing custom template sets, you can adapt the user interface to different contexts and needs while maintaining the integrity of the default templates.

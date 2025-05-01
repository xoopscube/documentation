

# User Group

User group permissions in XCL are managed through the XoopsGroupPerm class and its handler XoopsGroupPermHandler.  
This system controls what actions different user groups can perform within modules, blocks, and other areas of the application.
  

<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="xcl-user-group" width="100%" aria-roledescription="flowchart-v2" class="flowchart" style="max-width:616.4937744140625px" viewBox="0 0 616.494 606">
<style>#xcl-user-group{font-family:sans-serif;font-size:16px;fill:#fff}#xcl-user-group .edge-thickness-normal{stroke-width:1px}#xcl-user-group .edge-pattern-solid{stroke-dasharray:0}#xcl-user-group .marker{fill:#999;stroke:#999}#xcl-user-group .marker.cross{stroke:#999}#xcl-user-group .label,#xcl-user-group svg{font-family:sans-serif}#xcl-user-group svg{font-size:16px}#xcl-user-group p{margin:0}#xcl-user-group .label{color:#fff}#xcl-user-group span{fill:#fff;color:#fff}#xcl-user-group .node circle,#xcl-user-group .node path,#xcl-user-group .node rect{fill:#212745;stroke:#face74;stroke-width:1px}#xcl-user-group .node .label{text-align:center}#xcl-user-group .flowchart-link{stroke:#999;fill:none}#xcl-user-group .edgeLabel{background-color:#0d0f1c;text-align:center}#xcl-user-group .edgeLabel p{background-color:#0d0f1c}#xcl-user-group .edgeLabel rect{opacity:.5;background-color:#fff;fill:#fff}#xcl-user-group :root{--mermaid-font-family:sans-serif}</style><marker id="xcl-user-group_flowchart-v2-pointEnd" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 0 10 5-10 5z" class="arrowMarkerPath"/></marker><marker id="xcl-user-group_flowchart-v2-pointStart" class="marker flowchart-v2" markerHeight="8" markerUnits="userSpaceOnUse" markerWidth="8" orient="auto" refX="4.5" refY="5" viewBox="0 0 10 10"><path stroke-dasharray="1 0" d="m0 5 10 5V0z" class="arrowMarkerPath"/></marker><marker id="xcl-user-group_flowchart-v2-circleEnd" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="11" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="xcl-user-group_flowchart-v2-circleStart" class="marker flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" stroke-dasharray="1 0" class="arrowMarkerPath"/></marker><marker id="xcl-user-group_flowchart-v2-crossEnd" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="12" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><marker id="xcl-user-group_flowchart-v2-crossStart" class="marker cross flowchart-v2" markerHeight="11" markerUnits="userSpaceOnUse" markerWidth="11" orient="auto" refX="-1" refY="5.2" viewBox="0 0 11 11"><use xlink:href="#reuse-0" stroke-dasharray="1 0" stroke-width="2" class="arrowMarkerPath"/></marker><g class="root"><g class="edgePaths"><path id="L_Module_ModulePermissions_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M107.169 318v6.167c0 6.166 0 18.5 9.212 30.477 9.213 11.978 27.638 23.6 36.85 29.411l9.213 5.811" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ModulePermissions_ReadAccess_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="m163.723 446-10.257 6.167c-10.257 6.166-30.771 18.5-41.028 30.166C102.181 494 102.181 505 102.181 510.5v5.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ModulePermissions_AdminAccess_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="m273.313 446 14.773 6.167c14.772 6.166 44.318 18.5 59.091 30.166C361.95 494 361.95 505 361.95 510.5v5.5" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_User_Group_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M102.181 62v70" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_Group_GroupPermissions_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M102.181 190v6.167c0 6.166 0 18.5 19.876 30.641 19.875 12.141 59.626 24.091 79.501 30.066l19.875 5.974" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_GroupPermissions_ModulePermissions_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M315.081 318v6.167c0 6.166 0 18.5-9.685 30.489-9.686 11.99-29.057 23.637-38.742 29.46l-9.686 5.823" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_ModuleHandler_GroupPermissions_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M315.081 190v70" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/><path id="L_XoopsUser_GroupPermissions_0" marker-end="url(#xcl-user-group_flowchart-v2-pointEnd)" d="M540.444 190v6.167c0 6.166 0 18.5-21.074 30.651-21.073 12.151-63.219 24.12-84.293 30.105l-21.073 5.984" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link"/></g><g class="edgeLabels"><g class="edgeLabel"><foreignObject width="23.988" height="24" class="label" transform="translate(95.175 343)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>has</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="92.013" height="24" class="label" transform="translate(56.175 471)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>module_read</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="104.8" height="24" class="label" transform="translate(309.55 471)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>module_admin</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="75.475" height="24" class="label" transform="translate(64.444 87)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>belongs to</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="23.988" height="24" class="label" transform="translate(90.188 215)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>has</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="61.862" height="24" class="label" transform="translate(284.15 343)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>assigned</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="46.95" height="24" class="label" transform="translate(291.606 215)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>checks</p></span></div></foreignObject></g><g class="edgeLabel"><foreignObject width="120.4" height="24" class="label" transform="translate(480.244 215)"><div xmlns="http://www.w3.org/1999/xhtml" class="labelBkg" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="edgeLabel"><p>method: isAdmin</p></span></div></foreignObject></g></g><g class="nodes"><g id="flowchart-Module-0" class="node default"><path d="M49.938 264h114.463v54H49.938z" class="basic label-container"/><g class="label" transform="translate(79.938 279)"><rect/><foreignObject width="54.463" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module</p></span></div></foreignObject></g></g><g id="flowchart-ModulePermissions-1" class="node default"><path d="M107.893 392h201.475v54H107.893z" class="basic label-container"/><g class="label" transform="translate(137.894 407)"><rect/><foreignObject width="141.475" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Module Permissions</p></span></div></foreignObject></g></g><g id="flowchart-ReadAccess-3" class="node default"><path d="M8 520h188.363v78H8z" class="basic label-container"/><g class="label" transform="translate(38 535)"><rect/><foreignObject width="128.363" height="48"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Read Access<br/>(can view module)</p></span></div></foreignObject></g></g><g id="flowchart-AdminAccess-5" class="node default"><path d="M246.362 520h231.175v78H246.362z" class="basic label-container"/><g class="label" transform="translate(276.363 535)"><rect/><foreignObject width="171.175" height="48"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Admin Access<br/>(can administer module)</p></span></div></foreignObject></g></g><g id="flowchart-User-6" class="node default"><path d="M56.325 8h91.712v54H56.325z" class="basic label-container"/><g class="label" transform="translate(86.325 23)"><rect/><foreignObject width="31.712" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>User</p></span></div></foreignObject></g></g><g id="flowchart-Group-7" class="node default"><path d="M46.594 136h111.175v54H46.594z" class="basic label-container"/><g class="label" transform="translate(76.594 151)"><rect/><foreignObject width="51.175" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Groups</p></span></div></foreignObject></g></g><g id="flowchart-GroupPermissions-9" class="node default"><path d="M219.387 264h191.387v54H219.387z" class="basic label-container"/><g class="label" transform="translate(249.388 279)"><rect/><foreignObject width="131.387" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>Group Permissions</p></span></div></foreignObject></g></g><g id="flowchart-ModuleHandler-12" class="node default"><path d="M207.768 136h214.625v54H207.768z" class="basic label-container"/><g class="label" transform="translate(237.769 151)"><rect/><foreignObject width="154.625" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>XoopsModuleHandler</p></span></div></foreignObject></g></g><g id="flowchart-XoopsUser-14" class="node default"><path d="M472.394 136h136.1v54h-136.1z" class="basic label-container"/><g class="label" transform="translate(502.394 151)"><rect/><foreignObject width="76.1" height="24"><div xmlns="http://www.w3.org/1999/xhtml" display="table-cell" style="white-space:nowrap;line-height:1.5;max-width:200px;text-align:center"><span class="nodeLabel"><p>XoopsUser</p></span></div></foreignObject></g></g></g></g></svg>
</p>


## Module User

**User module** enables you to manage privileges and assign permissions to user groups defined within the default security system.   
It also provides recommended practices for establishing a simple, secure, and scalable user account authentication system.

The following features are provided by the modules Users, Message and Protector:

- Group-based permissions
- Registration : new user account and activation method
- Authentication and security limit of Log in attempts
- Extend User Profile with custom fields
- Private Message
- Blocks : Login, Users Online, New Members, Top Posters
- Manage subscription event notification


## Group Management

Groups are used to segment users within your web application. You can assign users to multiple groups and grant them access to modules and block content. The installation wizard automatically creates the following default User Groups and Roles:

<div class="table-wrapper">
<table style="border-collapse:separate;border-spacing:2px;padding:1px;">
<tr><th><b>User Groups</b></th><td><b>Description</b></td></tr>
<tr style="background:#17599b"><td>Webmasters</td><td>Full administrative permissions across the application</td></tr>
<tr style="background:#367d38"><td>Registered Users</td><td>All users except anonymous. Permissions to read and write comments.</td></tr>
<tr style="background:#9b6b17"><td>Anonymous Users</td><td>Guest users or visitors, by default anonymous. Permissions restricted to read.</td></tr>
<tr><th><b>Roles</b></th><td><b>Privilege</b></td></tr>
<tr style="background:#17599b"><td>Webmaster</td><td>Administration</td></tr>
<tr style="background:#4339c6"><td>Moderator</td><td>Forum moderation</td></tr>
</table>
</div>




!> These User Groups and Roles are required by the system and cannot be deleted !  
You can create new Groups and modify the permissions for each new Group created.

## Core Permission System

The permission system is built around three key concepts:

Permission Names: Predefined strings that represent specific actions (like module_read, module_admin, block_read).


Group IDs: Each user belongs to one or more groups, and permissions are assigned to these groups

Item IDs: The specific item (like a module, block, or forum) that the permission applies to

The ability to perform an action requires privileges. While permissions and privileges are often used interchangeably, they technically have distinct meanings in web application security. Modules expose permissions, and users possess privileges. Privileges are essentially assigned permissions granted to User Groups. Therefore, when you assign a permission to a user group, you are granting a privilege to all its members.

<span class="iconify" data-icon="mdi:github"></span> Sources: 
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/kernel/groupperm.php#L214-L226" target="_blank">/html/kernel/groupperm.php#L214-L226</a></code> 
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/kernel/groupperm.php#L29-L686" target="_blank">/html/kernel/groupperm.php#L29-L686</a></code> 
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/kernel/user.php#L214-L226" target="_blank">/html/kernel/user.php#L214-L226</a></code>


### Store Permissions

Permissions are stored in the `group_permission` database table with the following structure:

`gperm_id`: Unique identifier  
`gperm_groupid`: The group ID  
`gperm_itemid`: The item ID (e.g., module ID)  
`gperm_modid`: The module ID that owns this permission  
`gperm_name`: The permission name (e.g., module_read)  


### Checking Permissions

When a user tries to access a resource, the system checks if they have the required permission using the `checkRight()` method.

This method:

1. Checks if the user is an admin (admins have all permissions by default)
2. Gets all groups the user belongs to
3. Checks if any of those groups have the required permission for the specific item

For example, when checking if a user can access a module.

<span class="iconify" data-icon="mdi:github"></span> Sources: 
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/kernel/groupperm.php#L363-L372" target="_blank">/html/kernel/groupperm.php#L214-L226</a></code> 
<code><a href="https://github.com/xoopscube/legacy/blob/7f33bc98/html/kernel/user.php#L215-L225" target="_blank">/html/kernel/user.php#L215-L225</a></code> 


### Managing Permissions

Permissions can be added, removed, or modified through these methods:

1. Adding permissions

2. Removing permissions

3. Deleting all permissions for a group.

### User Interface for Permission Management

The admin interface allows administrators to manage permissions through checkboxes for each group and permission type. For example, in the d3forum module.

This creates a table with groups as rows and permissions as columns, allowing admins to easily set permissions.


### Permission Types

Common permission types include:

1. Module permissions:
  - module_read: Can access the module
  - module_admin: Can administer the module

2. Block permissions:
  - block_read: Can view the block

#### Custom module permissions:

For example, in the d3forum module:

- can_read: Can read forum posts
- can_post: Can create posts
- can_edit: Can edit posts
- can_delete: Can delete posts
- is_moderator: Has moderator privileges.

### User's Effective Permissions

A user's effective permissions are determined by the sum of all permissions granted to all groups they belong to. This is explained in the User module help documentation.

### Permission vs. Privileges

The system makes a distinction between permissions and privileges.

- Permissions: Actions that can be executed on a module
- Privileges: Permissions assigned to user groups

### Notes

The permission system is modular, allowing each module to define its own permission types
Administrators (members of the XOOPS_GROUP_ADMIN group) automatically have all permissions
Permissions can be assigned at both group and individual user levels
The system uses a database-driven approach, making it flexible and extensible
Wiki pages you might want to explore:
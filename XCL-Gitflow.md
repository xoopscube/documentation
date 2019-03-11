# The continuous delivery Gitflow way

## Permanent Branches

#### Development branch
The develop branch is the current working branch.

#### Master branch
The **master** branch is always at our most recent, production-ready release.   
Only production-ready releases should be pushed to this branch.

## Non-Permanent Branches

#### Feature branches
All development work on new features that have not been released go in **"feature"** branches.

#### Bugfix branches
All development work to fix bugs should branch from the latest hotfix branch (see above)   
and should be named : *bugfix/issue-number-description*

#### Release branches
Work to complete a new release go in **release** branches.

Create a **release** branch from **develop** with the name :

> release/version-number

Once a **release** branch is complete, it will be merged into both **master** and **develop**.

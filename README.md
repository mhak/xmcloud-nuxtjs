# XM Cloud Starter Kit (Nuxt JS)

## QUICK START

1. In an ADMIN terminal:

    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword"
    ```

2. Restart your terminal and run:

    ```ps1
    .\up.ps1
    ```

3. Follow the instructions to [deploy to XM Cloud](#deploy-to-xmcloud)

4. Create Edge token and [query from edge](#query-edge)

*** 

## About this Solution
This is a Proof of Concept demonstrating the use of NuxtJS on XM Cloud

https://github.com/Sitecore/jss

The Rendering SDK / Starter Kit contains many functionality to get you started developing in Nuxt.js. 

### :white_check_mark: Site resolver
Filepath: `rendering/src/lib/site-resolver`

### Layout service
Filepath: `rendering/src/lib/page-props-factory`
1. :white_check_mark: Normal Mode
1. todo: edit mode
1. :white_check_mark: GraphQL vs Reset

### Rendering
Filepath: `rendering/src/plugins`
1. :white_check_mark: Sitecore Jss Store - Sitecore Context / Route data
1. :white_check_mark: Sitecore Jss Placeholder - reads from component factory to render components dynamically

### Misc notes

1. components factory
1. configuration generation
1. Bootstrap.ts
    1. Generate plugins
    1. Generate config
    1. Generate component builder
1. rendering fields

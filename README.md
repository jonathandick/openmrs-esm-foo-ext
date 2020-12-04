# MF Development Session

## Objectives
1. Learn how to set up your machine for local development
2. Understand the extension framework and build your first extension
3. Learn about configuration and the implementer tools for MFs

## Target project
Build a navigation link to go to the home page and attach it to the nav-meu slot

## Required software for local development:
- NodeJS and NPM : https://nodejs.org/en/
- n (node version manager) : ```npm install -g n``` see https://www.npmjs.com/package/n
- Visual Code Studio : https://code.visualstudio.com/

## Step-by-step
1. Fork/clone this repo

2. cd into the cloned directory

3. In your terminal, install the npm modules: 
``` npm install ```
- make sure you are using a relatively recent version of node, LTE is 14.x.x, you can type node -version to find your current version. I would recommend using n to manage your node version: see https://www.npmjs.com/package/n
- make sure you have a .gitignore file which includes node_modules

4. Run ```npm update``` to get updates

5. Run ```npm run start -- --importmap="https://spa-modules.nyc3.digitaloceanspaces.com/import-map.json"``` to start the development environment. This will do two things: 1) start a local app shell; 2) serve your repo locally and add it to the import-map of your local app shell. Note that we are explicitly telling the app-shell to use the latest import-map on digital ocean. We are ONLY doing this now because we have made changes to a few modules which have not been released yet on npm. 

As an alternative to local development, one could also use https://openmrs-spa.org directly. Instead of the above npm command, you would run: ```npm run debug -- --https```. This would serve the module locally (likley at port 8080 but check your terminal output). You could then add this module to your import-map via the dev tools widget. To enable this widget, enter your browser console and type ```localstorage.setItem("openmrs:devtools",true)```. You should now see a small gray box in the bottom right of the browser window. Click on it. Click on "Add new module". For the module name, type "@openmrs/esm-foo-ext-app", for the Override URL type in 8080 (or the port assigned as indicated in your terminal). Refresh your browser and you now have this module loaded in your app. 



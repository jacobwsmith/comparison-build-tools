# Comparison of Build Tools

A place to compare Build Tools for a "multi page" angular 1.x application.

Examples:
  - No Build
  - Gulp
  - Webpack
  - JSPM
  - TypeScript
  
Possilbe TODOs:
  - TemplateCache the html templates to cut down on the number of requests
  - Images, fonts, svg?  (eot|woff|woff2|ttf|svg|png|jpg)

### Example No Build

This example contains no build step and is a baseline for comparison.

Run Example:
```sh
$ python -m SimpleHTTPServer 8000
```

### Example Gulp

This example contains a Gulp build step that concatenates and minifies the css and javascript. The idea is that each page would contain a global and page specific version of the js and css greatly reducing the number of requests.

Run Example:
```sh
$ gulp
$ gulp watch
$ python -m SimpleHTTPServer 8001
```

### Example Webpack

This example contains a Webpack build step that concatenates and minifies the css and javascript. The idea is that each page would contain a global and page specific js file greatly reducing the number of requests. Note that styles get wrapped up into the js file.

Run Example:
```sh
$ webpack --progress --colors --watch
$ python -m SimpleHTTPServer 8003
```

### Example JSPM

This example uses the JSPM + SystemJS + Babel.
  - jspm is a package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader
  - Load any module format (ES6, AMD, CommonJS and globals) directly from any registry such as npm and GitHub with flat versioned dependency management. Any custom registry endpoints can be created through the Registry API.
  - For development, load modules as separate files with ES6 and plugins compiled in the browser.
  - For production (or development too), optimize into a bundle, layered bundles or a self-executing bundle with a single command.

Reference: http://jspm.io/docs/getting-started.html

TODO: watch and bundle when changed

Run Example:
```sh
$ python -m SimpleHTTPServer 8004
```
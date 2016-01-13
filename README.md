# Comparison of Build Tools

A place to compare Build Tools for a "multi page" angular 1.x application.

Examples:
  - No Build
  - Gulp
  - Webpack
  - JSPM
  - TypeScript

### Example No Build

This example contains no build step and is a baseline for comparison.

Run Example:
```sh
$ python -m SimpleHTTPServer 8000
```

### Example Gulp

This example contains a gulp build step that concatinates, minifies, and .

Run Example:
```sh
$ gulp
$ gulp watch
$ python -m SimpleHTTPServer 8001
```
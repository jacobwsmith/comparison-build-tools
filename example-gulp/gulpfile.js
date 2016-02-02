// ====================================================
// Required modules
// ====================================================
var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var group = require('gulp-group-files');

// ====================================================
// Configuration Values
// Seperate out build process into two bundles
// Global and Page Specific
// Note: we've created seperate methods
// to watch against because global can run slow
// due to the large file size of all the libraries 
// ====================================================
var globalScripts = [
    './assets/lib/angular-1.4/angular.js',
    './assets/lib/jquery-2.1/dist/jquery.js'
];
var globalStyles = [
    './assets/lib/normalize.css/normalize.css',
    './assets/css/*.css'
];
var pageScripts = {
    'dashboard': [
        './dashboard/app/**/*.js',
        './assets/components/foo/foo.js'
    ],
    'accounts': [
        './accounts/app/**/*.js'
    ]
};
var pageStyles = {
    'dashboard': [
        './dashboard/app/**/*.css',
        './assets/components/foo/foo.css'
    ],
    'accounts': [
        './accounts/app/**/*.css'
    ]
};
// ====================================================
// Gulp Tasks
// ====================================================

//  Default gulp task
gulp.task('default', ['clean'], function () {
    gulp.start('globalScripts');
    gulp.start('globalStyles');
    gulp.start('pageScripts');
    gulp.start('pageStyles');
});

// Cleans
gulp.task('clean', function () {
    return gulp.src('dist', { read: false }).pipe(clean());
});

// Global asset gulp methods
gulp.task('globalScripts', group({ 'global': globalScripts }, buildScripts));
gulp.task('globalStyles', group({ 'global': globalStyles }, buildStyles));

// Page specific asset gulp methods
gulp.task('pageScripts', group(pageScripts, buildScripts));
gulp.task('pageStyles', group(pageStyles, buildStyles));

// Watching and building
gulp.task('watch', ['default'], function () {
    
    // Global watch
    gulp.watch(globalScripts, ['globalScripts']);
    gulp.watch(globalStyles, ['globalStyles']);
    
    // Page specific watch
    // having to push objects into an array
    // cuz object holding arrays
    // TODO: ENSURE THIS CAN SCALE
    gulp.watch(returnPageArray(pageScripts), ['pageScripts']);
    gulp.watch(returnPageArray(pageStyles), ['pageStyles']);
    
    // Testing - finds the page and runs as and individual task
    // allows you can get the changed path
    // then we have to make sure it matches the
    // and only run the individual task
    // gulp.watch([
    //     './**/*.js',
    //     '!./dist/**/*.js',
    //     '!./node_modules/**/*.js',
    //     '!./typings/**/*.js',
    //     '!./gulpfile.js',
    // ], function (obj) {
    //     //console.log(obj);
    //     if(obj.type === 'changed'){
    //         //console.log(obj.path); // /Users/username/Workspaces/git-hub/build-gulp/dashboard/app/app.js
    //         for(var key in scripts){
    //             // TODO: this is not ideal, too brittle
    //             // Regular exppression might prove helpful
    //             if(obj.path.indexOf('/'+key+'/') !== -1){
    //                 console.log('updating: ' + key);
    //                 var name = key;
    //                 var files = scripts[key];
    //                 gulp.src(files)
    //                 .pipe(sourcemaps.init())
    //                 .pipe(concat(name + ".js"))
    //                 .pipe(uglify({ mangle: false }))
    //                 .pipe(sourcemaps.write('./'))
    //                 .pipe(gulp.dest(name == "global" ? "dist/" : "dist/" + name + "/"));
    //                 break;
    //             }
    //         }
    //     }
    // });
  
});

// ====================================================
// General methods
// ====================================================

// Build the Scripts
function buildScripts(name, files) {
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat(name + ".js"))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(name == "global" ? "dist/" : "dist/" + name + "/"));
}

// Builds the Styles
function buildStyles(name, files) {
    return gulp.src(files)
        .pipe(concat(name + ".css"))
        .pipe(minifyCss())
        .pipe(gulp.dest(name == "global" ? "dist/" : "dist/" + name + "/"));
}

// Returns a array of all the page scripts
function returnPageArray(obj) {
    var rv = [];
    for (var key in pageScripts) {
        for (var i = 0; i < pageScripts[key].length; i++) {
            rv.push(pageScripts[key][i]);
        }
    }
    return rv;
}
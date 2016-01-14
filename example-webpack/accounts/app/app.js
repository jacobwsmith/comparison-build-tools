/*
<link href="/assets/lib/normalize.css/normalize.css" rel="stylesheet">
    <link href="/assets/css/_nav.css" rel="stylesheet">
    <link href="/assets/css/_type.css" rel="stylesheet">
    <link href="/assets/css/_grid.css" rel="stylesheet">
    <link href="/assets/css/_tables.css" rel="stylesheet">
    <link href="/assets/css/_helpers.css" rel="stylesheet">
    <link href="/assets/css/_buttons.css" rel="stylesheet">
    <link href="/assets/css/_panels.css" rel="stylesheet">
    <link href="/assets/css/_forms.css" rel="stylesheet">
    <link href="/assets/css/_icons.css" rel="stylesheet">
    <link href="/assets/css/_breadcrumbs.css" rel="stylesheet">
    <link href="/assets/css/_tabs.css" rel="stylesheet">
    <link href="/assets/css/_summary.css" rel="stylesheet">
    <link href="/assets/css/_dropdown.css" rel="stylesheet">
    <link href="/assets/css/_font-awesome.css" rel="stylesheet">
    <link href="/assets/css/_glyphicons.css" rel="stylesheet">
    <link href="/assets/css/_modal.css" rel="stylesheet">
    <link href="/assets/css/_alerts.css" rel="stylesheet">
    <link href="/assets/css/_popover.css" rel="stylesheet">

    <!-- PAGE SPECIFIC STYLES -->
    <link href="app/app.css" rel="stylesheet">
    <link href="app/summary/summary.css" rel="stylesheet">
    <link href="app/list/list.css" rel="stylesheet">
*/

// <!-- GLOBAL SCRIPTS -->
require("/assets/lib/jquery-2.1/dist/jquery.min.js");
require("/assets/lib/angular-1.4/angular.min.js");

// <!-- PAGE SPECIFIC SCRIPTS -->
require("app/app.js");
require("app/summary/summary.js");
require("app/list/list.js");

angular.module('app', []).controller('AppCtrl', function($scope){
    var appVm = this;
    appVm.title = "Accounts";
});
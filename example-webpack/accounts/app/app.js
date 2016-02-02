
// <!-- GLOBAL STYLES -->
require("./../../assets/lib/normalize.css/normalize.css");
require("./../../assets/css/_nav.css");
require("./../../assets/css/_type.css");
require("./../../assets/css/_grid.css");
require("./../../assets/css/_tables.css");
require("./../../assets/css/_helpers.css");
require("./../../assets/css/_buttons.css");
require("./../../assets/css/_panels.css");
require("./../../assets/css/_forms.css");
require("./../../assets/css/_icons.css");
require("./../../assets/css/_breadcrumbs.css");
require("./../../assets/css/_tabs.css");
require("./../../assets/css/_summary.css");
require("./../../assets/css/_dropdown.css");
require("./../../assets/css/_font-awesome.css");
require("./../../assets/css/_glyphicons.css");
require("./../../assets/css/_modal.css");
require("./../../assets/css/_alerts.css");
require("./../../assets/css/_popover.css");

// <!-- PAGE SPECIFIC STYLES -->
require("./app.css");
require("./summary/summary.css");
require("./list/list.css");

// <!-- GLOBAL SCRIPTS -->
require("./../../assets/lib/jquery-2.1/dist/jquery.min.js");
require("./../../assets/lib/angular-1.4/angular.min.js");

angular.module('app', []).controller('AppCtrl', function($scope){
    var appVm = this;
    appVm.title = "Dashboard";
});

// <!-- PAGE SPECIFIC SCRIPTS -->
require("./summary/summary.js");
require("./list/list.js");
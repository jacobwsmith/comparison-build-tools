// Global CSS
import 'normalize.css';
import '../../assets/css/_nav.css!';
import '../../assets/css/_type.css!';
import '../../assets/css/_grid.css!';
import '../../assets/css/_tables.css!';
import '../../assets/css/_helpers.css!';
import '../../assets/css/_buttons.css!';
import '../../assets/css/_panels.css!';
import '../../assets/css/_forms.css!';
import '../../assets/css/_icons.css!';
import '../../assets/css/_breadcrumbs.css!';
import '../../assets/css/_tabs.css!';
import '../../assets/css/_summary.css!';
import '../../assets/css/_dropdown.css!';
import '../../assets/css/_font-awesome.css!';
import '../../assets/css/_glyphicons.css!';
import '../../assets/css/_modal.css!';
import '../../assets/css/_alerts.css!';
import '../../assets/css/_popover.css!';

// Global Scripts
import angular from 'angular';

// Load Modules
import AppCtrl from './app.js';
import SummaryCtrl from './summary/summary.js';
import ListCtrl from './list/list.js';

// Vanilla javascript to add the app, controller and the template
// This allows us to keep no logic in the parent html
// TODO: Test this on build
var tpl = "<div ng-include=\"'./app/app.htm'\"></div>";
var div = document.createElement('div');
div.innerHTML = '<div ng-app="app">'+tpl+'</div>';
document.getElementsByTagName('body')[0].appendChild(
	div
);

angular
	.module('app', [])
	.controller('AppCtrl', AppCtrl)
	.controller('SummaryCtrl', SummaryCtrl)
	.controller('ListCtrl', ListCtrl)
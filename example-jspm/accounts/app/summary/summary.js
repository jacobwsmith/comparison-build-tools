// Summary Module
// angular.module('app').controller('SummaryCtrl', function($scope){
//    var summaryVm = this;
//    summaryVm.title = 'Summary';''
// });

import './summary.css!';

class SummaryCtrl {  
    constructor() {
        var summaryVm = this;
        summaryVm.title = 'Summary';
    }
}

// Example of injecting dependencies
//SummaryCtrl.$inject = ['UserService'];

export default SummaryCtrl;
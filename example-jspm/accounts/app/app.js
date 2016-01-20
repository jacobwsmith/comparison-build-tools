// angular.module('app', []).controller('AppCtrl', function($scope){
//     var appVm = this;
//     appVm.title = "Accounts";
// });

import './app.css!';

class AppCtrl {  
    constructor() {
        var appVm = this;
        appVm.title = 'Accounts';
    }
}

// Example of injecting dependencies
//AppCtrl.$inject = ['UserService'];

export default AppCtrl;
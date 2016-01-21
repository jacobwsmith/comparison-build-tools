// List Module
// angular.module('app').controller('ListCtrl', function($scope){
//    var listVm = this;
//    listVm.title = 'List';
// });

import './list.css!';

class ListCtrl {  
    constructor() {
        var listVm = this;
        listVm.title = 'List';
    }
}

// Example of injecting dependencies
//ListCtrl.$inject = ['UserService'];

export default ListCtrl;
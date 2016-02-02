angular.module('app')
    .directive('foo', function() {
        return {
            restrict: 'E',
            link: function($scope, elem, attrs, ctrl) {

            },
            template: '<span class="foo">YES!</span>'
        };
    });
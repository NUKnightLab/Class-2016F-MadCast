angular.module(('mean.system', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize']).component('madlib', {
    bindings: {
      sentence: '='
    },
    controller: function MadlibController() {
      this.customHtml = '<ul><li>render me please</li></ul>';
    },
    template: '<div ng-bind-html="customHtml">yoooo</div>',
  });

  angular.module('mean.system', ['ngSanitize'])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.myHTML = 
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
}]);

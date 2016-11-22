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


angular.module('mean.system').controller('Controlla', ['$scope', function($scope) {
  $scope.master = {};
  $scope.hero = {
    name: 'Spawn'
  };

  $scope.update = function(user) {
       $scope.master = angular.copy(user);
       if ($scope.user.feeling == "cheerful") {
          console.log("You are a Hang Out Homie");
       };
       if ($scope.user.feeling == "funny") {
          console.log("You are Jovial Jokester");
       };
       if ($scope.user.feeling == "informative") {
          console.log("You're a Curious Cat!");
       };
       if ($scope.user.feeling == "somber") {
          console.log("You are a Mopey Muppet");
       };
       if ($scope.user.feeling == "serious") {
          console.log("You are a News Nerd!");
       };
     };

     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };

     $scope.reset();
}]);

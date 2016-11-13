'use strict';

  angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).controller('DemoCtrl', DemoCtrl);

      function DemoCtrl ($timeout, $q, $log) {
        var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        // list of `state` value/display objects
        self.states        = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.newState = newState;

        function newState(state) {
          alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
        function querySearch (query) {
          var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
              deferred;
          if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
          } else {
            return results;
          }
        }

        function searchTextChange(text) {
          $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
          $log.info('Item changed to ' + JSON.stringify(item));
        }

    /**
     * Build `states` list of key/value pairs
     */
        function loadAll() {
          var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                  Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                  Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                  Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                  North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                  South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                  Wisconsin, Wyoming';

          return allStates.split(/, +/g).map( function (state) {
            return {
              value: state.toLowerCase(),
              display: state
            };
          });
        }

    /**
     * Create filter function for a query string
     */
        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
          };

        }
  }



/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/

angular.module('mean.system').controller('Controlla', ['$scope', function($scope) {
  $scope.master = {};

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

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;


    $scope.sites = [{
      'name': 'makeapoint',
      'text': 'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      'author': 'Linnovate',
      'link': 'http://www.linnovate.net',
      'image': '/meanStarter/assets/img/makeapoint.png'
    }, {
      'name': 'Cactus Intranet',
      'text': 'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
      'author': 'QED42',
      'link': 'http://www.qed42.com',
      'image': '/meanStarter/assets/img/cactus.png'
    }];
    $scope.packages = {
      'gmap': {
        'name': 'gmap',
        'text': 'gmap lets you add geographical information to your applications objects',
        'author': 'Linnovate',
        'link': 'http://www.qed42.com',
        'image': '/meanStarter/assets/img/gmap.png'
      },
      'upload': {
        'name': 'Upload',
        'text': 'Upload lets you add upload functionality to MEAN stack',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket': {
        'name': 'Socket',
        'text': 'Socket.io support',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.docs = [{
      text: 'Overview',
      link: 'http://learn.mean.io/#mean-technologies'
    }, {
      text: 'Packages',
      link: 'http://learn.mean.io/#mean-packages'
    }, {
      text: 'CLI',
      link: 'http://learn.mean.io/#mean-cli'
    }, {
      text: 'Network',
      link: 'http://learn.mean.io/#mean-mean-network'
    }, {
      text: 'Overriding',
      link: 'http://learn.mean.io/#mean-packages-overriding-the-default-layouts'
    }, {
      text: 'Contribution',
      link: 'http://learn.mean.io/#mean-packages-contributing-your-package'
    }];

    $scope.communities = [{
      link: 'https://facebook.com/groups/mean.io/',
      text: 'Informal support, news and just hanging out',
      icon: 'facebook'
    }, {
      link: 'https://github.com/linnovate/mean/',
      text: 'Issues, Support, Code discussions and PRs',
      icon: 'facebook'
    }, {
      link: 'https://gitter.im/linnovate/mean/',
      text: 'Support and Technical discussions',
      icon: 'gitter'
    }, {
      link: 'https://hangout.mean.io/',
      text: 'Video support, shared coding and to meet the people behind mean.io',
      icon: 'hangout'
    }];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);

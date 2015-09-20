'use strict';

/**
 * @ngdoc overview
 * @name scene2App
 * @description
 * # scene2App
 *
 * Main module of the application.
 */
angular
  .module('scene2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'ArtistsCtrl',
        controllerAs: 'artists'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('Artist', ['$resource', function($resource) {
  return $resource('/api/artists/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);


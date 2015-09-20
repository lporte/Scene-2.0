 
'use strict';
 
/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:ArtistsCtrl
 * @description
 * # ArtistsCtrl
 * Controller for Scene2.0
 */
angular.module('scene2App')
  .controller('ArtistsCtrl', ['$scope', 'Artist', function ($scope, Artist) {
    $scope.groups = Artist.query();
  }]);
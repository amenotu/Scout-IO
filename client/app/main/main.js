'use strict';

angular.module('ScoutIOApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'ResultsController',
        controllerAs: 'results'
      });
  });

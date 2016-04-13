'use strict';

/**
 * @ngdoc overview
 * @name myWeather
 * @description
 * # myWeather
 *
 * Main module of the application.
 */
angular
  .module('myWeather', [
    'ngRoute',
    'myWeather.services',
    'geolocation',
    'myWeather.filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
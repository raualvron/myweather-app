'use strict';

/**
 * @ngdoc function
 * @name myWeather.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the myWeather
 */
 angular.module('myWeather')
 .controller('SearchCtrl', function($scope, $location, myWeatherService) {
 	
 	//Getting URL from '....?city=' 
 	var city = $location.absUrl().substring('26').replace('#/search','');
 	var iso = '';

 	myWeatherService.getWeatherByName(city, "forecast").then(function(response){
 		$scope.weather = response.data;
 		iso = $scope.weather.city.country;
 		myWeatherService.getFlag(iso).then(function(response){
 			$.each(response.data, function(i, v) {
 				if (v.iso == iso) {
 					$scope.flagiso = v.flag;
 				}
 			});
 		});
 	});


 	
 });
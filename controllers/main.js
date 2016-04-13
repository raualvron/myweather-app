'use strict';

/**
 * @ngdoc function
 * @name myWeather.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myWeather
 */
 angular.module('myWeather')
 .controller('MainCtrl',function($scope, myWeatherService) {

 	var iso = '';

 	//Getting the geolocation by latitude and longitude
 	myWeatherService.getGeolocation().then(function (position) {
 		////Getting the forecast daily by coordinate
          myWeatherService.getWeatherByLatLng(position.lat, position.lng, "6" , "/forecast/daily?").then(function(response){
        	$scope.weather = response.data;
        	iso = $scope.weather.city.country;
   		});
    });


 	myWeatherService.getFlag(iso).then(function(response){
 		$.each(response.data, function(i, v) {
        	if (v.iso == iso) {
            	$scope.iso = v.flag
        	}
    	});
    });
});
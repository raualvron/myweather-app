'use strict';

/* Filters */

angular.module('myWeather.filters', [])

.filter('replaceDate', function() {
	return function(fecha) {
 		var dateString = moment.unix(fecha).format("dddd, MMMM DD, YYYY");
 		return dateString;
	};
})


.filter('replaceDateWithHours', function() {
	return function(fecha) {
 		var dateString = moment.unix(fecha).format("HH:mm, dddd, MMMM DD, YYYY");
 		return dateString;
	};
})
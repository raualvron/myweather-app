angular.module('myWeather.services', [])

.service('myWeatherService', function($http, $q, $window) {

    var apiKey = '79f03da162350e0c7039e600e4dfc06d';
    var apiURL = 'http://api.openweathermap.org/data/2.5/';

    return ({
        getWeatherByLatLng : getWeatherByLatLng,
        getGeolocation : getGeolocation,
        getWeatherByName : getWeatherByName,
        getFlag : getFlag

    });

    function getWeatherByName(city,type) {

        var promise =  $http({
            url: apiURL + type + '?q=' + city,
            params: {
                units: 'metric',
                cnt: 4,
                mode: 'json',
                lang: 'en',
                APPID: apiKey,
                headers: {
                    'x-api-key': apiKey
                }
            }
        }).

        success(function(data, status, headers, config) {
            console.log("Getting data.." + data);
        });

        return promise; 

    }

    function getWeatherByLatLng(lat,lng,days,type) {

        var promise =  $http({
            url: apiURL + type,
            params: {
                units: 'metric',
                lat: lat,
                lon: lng,
                cnt: days,
                mode: 'json',
                lang: 'en',
                APPID: apiKey,
                headers: {
                    'x-api-key': apiKey
                }
            }
        }).

        success(function(data, status, headers, config) {
            //console.log("Getting data.." + data);
        });

        return promise; 

    }
    

    function getGeolocation() {

        var deferred = $q.defer();

        if(!$window.navigator) {
          deferred.reject(new Error('Geolocation is not supported'));
      } else {
          $window.navigator.geolocation.getCurrentPosition(function(position) {
            deferred.resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
          });
        }, deferred.reject);
      }

      return deferred.promise;
  }

  function getFlag() {

    var promise =  $http({
      method: 'GET',
      url: '../lib/iso-flag.json'
    }).

    success(function(data, status, headers, config) {
        //console.log("Getting data.." + data);
    });

    return promise; 

}

});
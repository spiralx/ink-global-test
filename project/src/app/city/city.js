

function config($stateProvider) {
  $stateProvider
    .state('city', {
      url: '/city',
      templateUrl: 'city/city.html',
      views: {
        listView: {
          templateUrl: 'city/city.list.html',
          controller: 'CitiesListCtrl as citiesListCtrl'
        },
        basketView: {
          templateUrl: 'views/basket.html',
          controller: 'BasketController'
        }
      }
    });
}

function CityService($http) {
  var cachedData;

  return {
    getCities: getCities
  };

  function getCities() {
    return $http.get({
      method: 'GET',
      url: 'city/city-data.json',
      cache: true
    });
  }

}


angular
  .module('ig-test.city', [
    'ui.router'
  ])
  .config(config);

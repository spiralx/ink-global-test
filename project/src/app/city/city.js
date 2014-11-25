

function config($stateProvider) {
  $stateProvider
    .state('city', {
      url: '/',
      views: {
        itemView: {
          templateUrl: 'views/items.html',
          controller: 'ItemsController'
        },
        basketView: {
          templateUrl: 'views/basket.html',
          controller: 'BasketController'
        }
      }
    });
}


angular
  .module('city-weather.city', [])
  .config(config);

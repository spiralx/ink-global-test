
function config($stateProvider, $urlRouterProvider) {
  'use strict';
  // $stateProvider
  //   .state('index', {
  //     url: '/',
  //     views: {
  //       itemView: {
  //         templateUrl: 'views/items.html',
  //         controller: 'ItemsController'
  //       },
  //       basketView: {
  //         templateUrl: 'views/basket.html',
  //         controller: 'BasketController'
  //       }
  //     }
  //   });

  $urlRouterProvider.otherwise('/');
}


angular
  .module('city-weather', [
    'ui.router',
    'city-weather.city'
  ])
  .variable('API_KEY', '9ba1e3793ce0bd8f5fa46ee6e22ad478')
  .config(config);

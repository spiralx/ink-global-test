'use strict';


function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/city');
}


// ------------------------------------------------------------

angular
  .module('ig-test', [
    'ui.router',
    'ig-test.city',
    'ig-test.weather'
  ])
  .variable('API_KEY', '9ba1e3793ce0bd8f5fa46ee6e22ad478')
  .config(config);

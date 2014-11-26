

function CitiesListCtrl(CityService, cities) {
  'use strict';

  this.cities = cities;
}


// ------------------------------------------------------------

angular
  .module('ig-test.city')
  .controller('CitiesListCtrl', CitiesListCtrl);

  // function ($scope, $window) {
  //   $scope.todos = JSON.parse($window.localStorage.getItem('todos') || '[]');
  //   $scope.$watch('todos', function (newTodos, oldTodos) {
  //     if (newTodos !== oldTodos) {
  //       $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
  //     }
  //   }, true);

  //   $scope.add = function () {
  //     var todo = {label: $scope.label, isDone: false};
  //     $scope.todos.push(todo);
  //     $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
  //     $scope.label = '';
  //   };

  //   $scope.check = function () {
  //     this.todo.isDone = !this.todo.isDone;
  //   };
  // });

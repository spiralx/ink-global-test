

function CityListCtrl() {
  'use strict';

}



angular
  .module('city-weather.city')
  .controller('CityListCtrl', CityListCtrl);

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

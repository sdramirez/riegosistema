var riegoControllers = angular.module('riegoControllers', []);

riegoControllers.controller("IndexCtrl", function ($rootScope,$scope,$state,$location) {
  $scope.test = 'Hi !!!';
});

riegoControllers.controller("HomeCtrl", function ($rootScope,$scope,$location) {
  
});
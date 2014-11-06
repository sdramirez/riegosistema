var riegoApp = angular.module("riegoApp",[
  'ui.router',
  'ui.bootstrap',
  'riegoControllers'
]);
riegoApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/Inicio');
  $stateProvider
  .state("home", {
    url: "/Inicio",
    templateUrl: 'views/Home.html',
    controller: 'HomeCtrl'
  });
});

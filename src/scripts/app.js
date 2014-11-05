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
  })
  .state("control", {
    url: "/Control",
    templateUrl: 'views/Control.html',
    controller: 'ControlCtrl'
  })
  .state("mapa", {
    url: "/Mapa",
    templateUrl: 'views/Mapa.html',
    controller: 'MapaCtrl'
  })
  .state("estadisticas", {
    url: "/Estadisticas",
    templateUrl: 'views/Estadisticas.html',
    controller: 'EstadisticasCtrl'
  });
});

var riegoApp = angular.module("riegoApp",[
  'ui.router',
  'ui.bootstrap',
  'riegoControllers'
]);
riegoApp.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/Home');
  $stateProvider
  .state("home", {
    url: "/Home",
    templateUrl: 'views/Home.html',
    controller: 'HomeCtrl'
  });
  /*.state("alumno", {
    url: "/Alumno",
    templateUrl: 'views/Alumno.html',
    controller: 'AlumnoCtrl'
  })*/
  /*.state('docente',{
      url: '/Docente',
      controller: 'DocenteCtrl',
      views:
      {
          'menuApp':{
              templateUrl: 'views/Docente/DocenteMenu.html',
              controller: 'DocenteCtrl'
          },
          '':{
              templateUrl: 'views/Docente/DocenteMain.html',
              controller: 'DocenteCtrl'
          }
      }
  });*/
});

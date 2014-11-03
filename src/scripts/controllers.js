var riegoControllers = angular.module('riegoControllers', []);

riegoControllers.controller("MainCtrl", function ($rootScope,$scope,$state,$location,$modal) {
  
});

/*sacalControllers.controller("LoginCtrl", function ($rootScope,$scope,$location,mostrarNotificacion,callToWebService) {
  $scope.lost = false;
  $scope.sendEmail = false;
  $scope.login = function(f){
    var url = "login.php?usu_name='"+f.username.$viewValue+"'&usu_pass='"+f.password.$viewValue+"'";
    callToWebService.postCall(url,
    function sucess(data){
      location.reload();
    },
    function error(data){
     mostrarNotificacion.error("Usuario o contrasena incorrectos");
    });
  };

});*/
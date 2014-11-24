var riegoControllers = angular.module('riegoControllers', []);

riegoControllers.controller("IndexCtrl", function ($rootScope,$scope,$state,$location) {

});

riegoControllers.controller("HomeCtrl", function ($rootScope,$scope,$location,$state) {

<<<<<<< HEAD
=======
});

riegoControllers.controller("ControlCtrl", function ($rootScope,$scope,$location,$state) {
	document.getElementById("control").className += " menuActivo";
	document.getElementById("mapa").className = "";
	document.getElementById("estadis").className = "";
});

riegoControllers.controller("MapaCtrl", function ($rootScope,$scope,$location,$state) {
	document.getElementById("control").className = "";
	document.getElementById("mapa").className += " menuActivo";
	document.getElementById("estadis").className = "";
});

riegoControllers.controller("EstadisticasCtrl", function ($rootScope,$scope,$location,$state) {
	document.getElementById("control").className = "";
	document.getElementById("mapa").className = "";
	document.getElementById("estadis").className += " menuActivo";
>>>>>>> 020ba92a61b41026e2691e8db9623b3691b08b47
});
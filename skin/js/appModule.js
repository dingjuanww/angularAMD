/*
* module
* */
define(['angular','angularAMD','initIndexModule','initIndexRouter','angular-ui-router','angularAnimate'],function(angular,angularAMD,initIndexModule,initIndexRouter){
     var myAMD = angular.module('myModule',['ui.router','ngAnimate']);
     initIndexModule(myAMD);
     initIndexRouter(myAMD);
     return angularAMD.bootstrap(myAMD);
});
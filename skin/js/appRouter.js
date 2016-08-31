/*
* 各页面间的路由指引
* */
define(["angularAMD"],function(angularAMD){
    function initRouter(module){
        module.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
            // default
            $urlRouterProvider.otherwise("home");
            // route
            $stateProvider
            // home
                .state("home", angularAMD.route({
                    url: "/home",
                    templateUrl: "./tpl/home.html",
                    controllerUrl: "./skin/js/home/home.js"
                }))
                // about
                .state("about", angularAMD.route({
                    url: "/about",
                    templateUrl: "./tpl/about.html",
                    controllerUrl: "./skin/js/about/about.js"
                }));
        }]);
    }
    return initRouter;
});
/*
* 各套件的引用和相互之间的依赖
* */
require.config({
    paths: {
        // angular
        "angular": "./ng/AngularJS-1.4.1/js/angular",

        // angular-ui
        "angular-ui-router": "./ng/AngularJS-1.4.1/js/angular-ui-router.min",

        // angularAMD
        "angularAMD": "./ng/angularAMD/angularAMD.min",
        "ngload": "./ng/angularAMD/ngload.min",

        //angular-animate
        "angularAnimate" : "./ng/AngularJS-1.4.1/js/angular-animate",

        //controller
        "initIndexModule" : "./appCtr",

        //router
        "initIndexRouter" : "./appRouter"
    },
    shim: {
        // angular
        "angular": { exports: "angular" },

        // angular-ui
        "angular-ui-router": ["angular"],

        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"],

        //angular-animate
        "angular-animate":["angular"]
    }
});

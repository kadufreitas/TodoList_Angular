(function () {

    var configFunction = function ($stateProvider, $urlRouterProvider) {
        var index = {
            name: 'index',
            url: '/',
            templateUrl: 'components/templates/index.html',
            controller: 'MenuController'
        };
        var made = {
            name: 'made',
            url: '/made',
            templateUrl: 'components/templates/made.html',
            controller: 'MenuController'
        };

    $stateProvider.state(index);
    $stateProvider.state(made);
    $urlRouterProvider.otherwise('/');
    };

    angular
            .module('MyApp', ['ui.router','ngMaterial'])
            .config(configFunction);

}());
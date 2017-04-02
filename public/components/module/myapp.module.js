(function () {

    var configFunction = function ($stateProvider, $urlRouterProvider) {
        var index = {
            name: 'index',
            url: '/',
            templateUrl: 'components/templates/index.html',
            controller: 'MenuController'
        };

    $stateProvider.state(index);
    $urlRouterProvider.otherwise('/');
    };

    angular
            .module('MyApp', ['ui.router','ngMaterial'])
            .config(configFunction);

}());
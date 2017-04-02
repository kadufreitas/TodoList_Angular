(function () {

    var myAppModule = angular.module('MyApp');

    var HttpService = function($http) {

    };

    HttpService.$inject = ['$http'];
    myAppModule.service('HttpService',HttpService);
}());
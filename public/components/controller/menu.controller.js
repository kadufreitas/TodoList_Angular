(function () {

    var myAppModule = angular.module('MyApp');

    var MenuController = function ($scope) {

        $scope.tasks = [{
                text: 'Create issues in github'
                /*date: "01/04/2017",
                tag: "work"*/
        }];

        $scope.addTask = function (newTask) {
            console.log(newTask);
            $scope.tasks.push(angular.copy(newTask));
            delete $scope.task;

        }

        $scope.showTasks = function () {
            $scope.flag = !$scope.flag;
        }

    };

    MenuController.$inject = ['$scope'];
    myAppModule.controller('MenuController',MenuController);

}());
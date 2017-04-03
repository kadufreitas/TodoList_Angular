(function () {

    var myAppModule = angular.module('MyApp');

    var MenuController = function ($scope, HttpService) {

        $scope.tasks = [{
                text: 'Create issues in github',
                done: false
                /*date: "01/04/2017",
                tag: "work"*/
        }];

        $scope.addTask = function (newTask) {

            newTask['done'] = false;
            $scope.tasks.push(angular.copy(newTask));
            delete $scope.task;

        }

        $scope.showTasks = function () {
            $scope.flag = !$scope.flag;
        }

        $scope.taskDone = function (object) {
            object.done = !object.done;
        }

    };

    MenuController.$inject = ['$scope','HttpService'];
    myAppModule.controller('MenuController',MenuController);

}());
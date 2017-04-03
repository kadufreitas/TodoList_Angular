(function () {

    var myAppModule = angular.module('MyApp');

    var MenuController = function ($scope, $state, HttpService) {

        $scope.tasks = [{
                text: 'Create issues in github',
                done: false
                /*date: "01/04/2017",
                tag: "work"*/
        },{
                text: 'Create GC.doc in github',
                done: true
                /*date: "01/04/2017",
                tag: "work"*/
        }];

        $scope.addTask = function (newTask) {

            newTask['done'] = false;
            $scope.tasks.push(angular.copy(newTask));
            delete $scope.task;

        }

        $scope.showMade = function () {
            console.log("Entro no Made");
            $state.go('made');
        };

        $scope.showToDo = function () {
            console.log("Entro no toDo");
            $state.go('index');  
        };

        $scope.showTasks = function () {
            $scope.flag = !$scope.flag;
        }

        $scope.taskDone = function (object) {
            object.done = !object.done;
        }

    };

    MenuController.$inject = ['$scope', '$state','HttpService'];
    myAppModule.controller('MenuController',MenuController);

}());
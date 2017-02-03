(function () {
    var myApp = angular.module('myApp');
    var alertExperienceController = function ($scope, $mdDialog) {
        $scope.status = '  ';
        $scope.customFullscreen = false;

        $scope.showAlert = function(experiencia) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title(experiencia.nome)
                    .textContent('Periodo: ' + experiencia.periodo)
                    .ariaLabel('Alert Dialog Demo')
                    .ok('ok!')
                    .targetEvent(experiencia)
            );
        };


        function alertExperienceController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
        
    };

    alertExperienceController.$inject = ['$scope','$mdDialog'];

    myApp.controller('alertExperienceController', alertExperienceController);
}());
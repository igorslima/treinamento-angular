(function () {
  var myApp = angular.module('myApp');

  var experienciaController = function ($scope, $mdDialog) {
      var mv = this;
      mv.experiencias = [{nome: 'Programa Corredores Digitais', periodo: "08/16 - 12/16"},
                           {nome: 'Bolsista Divisão de Projetos', periodo: "08/16 - 10/16"},
                           {nome: 'Célula de Introdução ao Desenvolvimento de Jogos', periodo: '02/16-07/16'},
                           {nome: 'Bolsista na Biblioteca do Campus de Quixadá', periodo: '2015'} ];

      $scope.status = '  ';
      $scope.customFullscreen = false;

      mv.showDetalhes = function(experiencia) {
          $mdDialog.show(
              $mdDialog.alert()
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
      };

  };

    experienciaController.$inject = ['$scope','$mdDialog'];

    myApp.controller('experienciaController', experienciaController);
}());
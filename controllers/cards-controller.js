(function () {
    var myApp = angular.module('myApp');

    var CardsController = function ($scope) {
        $scope.imagePath = 'img/ibus.png';
    }

    CardsController.$inject = ['$scope'];

    myApp.controller('CardsController', CardsController);
}());
(function () {
    var myApp = angular.module('myApp');

    var MenuController = function ($state) {
        var mv = this;
        mv.changeTab = function (tabName) {
            $state.go(tabName);
        }
    };

    MenuController.$inject = ['$state'];

    myApp.controller('MenuController', MenuController);
}());
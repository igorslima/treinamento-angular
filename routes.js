(function () {
    var myApp = angular.module('myApp');

    myApp.config(function($stateProvider, $urlRouterProvider) {

        var quemSouEu = {
            name: 'quem-sou-eu',
            url: '/quem-sou-eu',
            templateUrl: 'templates/quem-sou-eu.html'
        };
        var projetos = {
            name: 'projetos',
            url: '/projetos',
            templateUrl: 'templates/projetos.html',
            controller: 'CardsController as mv'
        };
        var experiencia = {
            name: 'experiencia',
            url: '/experiencia',
            templateUrl: 'templates/experiencia.html',
            controller: 'experienciaController as mv'
        };
        var contato = {
            name: 'contato',
            url: '/contato',
            templateUrl: 'templates/contato.html'
        };
        $stateProvider.state(quemSouEu);
        $stateProvider.state(projetos);
        $stateProvider.state(experiencia);
        $stateProvider.state(contato);

        $urlRouterProvider.otherwise('/quem-sou-eu');
    });
}());
(function () {
    var myApp = angular.module('myApp');
    var projetosController = function () {
        var mv = this;
        mv.projetos = [
            {
                nome: "iBus",
                descricao: "Projeto integrado do 4° Semestre do Curso de Engenharia de Software da UFC - Quixadá",
                img: 'ibus.png',
                link: 'http://www.github.com/igorslima/ibusproject'
            },
            {
                nome: 'Porfolio',
                descricao: 'Portfolio criado no treinamento da iFactory',
                img: 'portfolio.png', //TODO
                link: 'http://www.github.com/igorslima/' //TODO

            }
        ]
    };
    myApp.controller('projetosController', projetosController);
}());
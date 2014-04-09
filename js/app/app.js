var BinomesApp = angular.module('Binomes.app', ['ngRoute']);

BinomesApp.config(function ($routeProvider) {
    $routeProvider.when('/',           {templateUrl: 'view/Binomes.html',    controller: 'BinomeRandomizeController'});
    $routeProvider.otherwise({redirectTo: '/'});
});

BinomesApp.run(function ($rootScope) {
    $rootScope.randomize
});
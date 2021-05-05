myAngular.config(function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl:"main.html"})
    .when("/red", {templateUrl:"red.html"})
    .when("/green", {templateUrl:"green.html"})
    .when("/blue", {templateUrl:"blue.html"});
});